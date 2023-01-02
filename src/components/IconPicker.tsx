import { withModal } from "@/hooks/modal";
import { getAntdIconNames } from "@/utils";
import * as antdIcons from "@ant-design/icons";
import { Col, Divider, Empty, Input, Row } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

interface IconPickerProps {
  onSelect?: (iconName: string) => void;
}

const IconPicker: React.FC<IconPickerProps> = ({ onSelect }) => {
  const [iconNames, setIconNames] = useState(getAntdIconNames());

  return (
    <Wrapper>
      <Input.Search
        className="search_input"
        allowClear
        placeholder="在此搜索图标，注意搜索内容为图标代码"
        onChange={e => setIconNames(getAntdIconNames(e.target.value))}
        onSearch={v => setIconNames(getAntdIconNames(v))}
      />

      <div className="icon_container">
        {iconNames.length ? (
          iconNames.map(item => (
            <div key={item.key}>
              <Divider className="title">{item.title}</Divider>

              <Row className="content" wrap gutter={[16, 6]}>
                {item.iconNames.map(iconName => (
                  <Col span={3} key={iconName}>
                    <div className="icon" onClick={() => onSelect && onSelect(iconName)}>
                      {React.createElement(Reflect.get(antdIcons, iconName))}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))
        ) : (
          <Empty className="empty" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </Wrapper>
  );
};

export default withModal(IconPicker, { title: "选择图标", width: 600 });

const Wrapper = styled.div`
  .search_input {
    width: 70%;
    margin-bottom: 4px;
  }

  .title {
    font-weight: 500;
    font-size: 20px;
  }

  .icon_container {
    max-height: 500px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }

    .content {
      padding: 0 4px;
      .icon {
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        border-radius: 8px;
        transition: all 0.3s;
        cursor: pointer;

        :hover {
          background-color: #5c6b77;
          color: #fff;
          font-size: 36px;
        }
      }
    }
  }

  .empty {
    margin: 60px 0;
  }
`;