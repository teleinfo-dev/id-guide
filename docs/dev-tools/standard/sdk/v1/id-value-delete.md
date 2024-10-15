# 标识值删除

- **方法功能**：按照标识和 index 删除标识值
- **方法描述**

```java
/**
 * Deletes an existing Handle from the handle server. </br> <b> Note: </b>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle The handle to delete.
 * @param indexes The handle value index to delete.
 */
void deleteHandleValues(String handle, int[] indexes) throws IDException;
```

- **方法参数**

| 参数    | 类型   | 参数描述       | 示例              |
| ------- | ------ | -------------- | ----------------- |
| handle  | String | 标识名称       | 88.888.3/20220121 |
| indexes | int[]  | 标识属性 index | new int[]{}       |
