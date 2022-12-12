import { StorageKeyEnum } from "@/constants/storage";
import dayjs from "dayjs";
import zhCN from "dayjs/locale/zh-cn";
import { BizStorage } from "./storage";
export { default as dayjs } from "dayjs";
export * from "./tips";

dayjs.locale(zhCN);

/**
 * 本地存储序列化数据，默认sessionStorage
 *
 * @example 如需要localStorage可在各个方法中入参
 * storage.getItem('key','localStorage')
 *
 * @example 或者创建新的localStorage实例
 * new Storage({ type: "localStorage" })
 */
export const storage = new BizStorage<StorageKeyEnum>({
  prefix: `@BLOG_${import.meta.env.MODE.toUpperCase()}/`,
  type: "localStorage"
});
