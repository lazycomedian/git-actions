import Iconfont from "@/components/Iconfont";
import { ConfigProvider, Modal, theme } from "antd";
import { AliasToken, OverrideToken } from "antd/es/theme/interface";
import zhCN from "antd/locale/zh_CN";
import React from "react";

export const overrideToken: OverrideToken = {
  Button: {
    fontSizeLG: 15,
    fontSize: 13
  }
};

const token: Partial<AliasToken> = {
  colorPrimary: "#2d8cf0",
  colorLink: "#5594f2",
  borderRadiusLG: 4,
  borderRadius: 4,
  colorText: "#515a6e"
};

const AntdConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider locale={zhCN} theme={{ algorithm: theme.defaultAlgorithm, components: overrideToken, token }}>
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigProvider;

Modal.defaultProps = {
  className: "i-ant-modal",
  closeIcon: <Iconfont type="sentimental-close" style={{ fontSize: 18 }} />
};
