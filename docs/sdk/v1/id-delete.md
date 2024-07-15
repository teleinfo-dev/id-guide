# 标识删除

- **方法功能**：按照标识进行删除
- **方法描述**

```java
/**
 * Deletes an existing Handle from the handle server. </br> <b> Note: </b>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle The handle to delete.
 */
void deleteHandle(String handle) throws IDException;
```

- **方法参数**

| 参数   | 类型   | 参数描述 | 示例              |
| ------ | ------ | -------- | ----------------- |
| handle | String | 标识名称 | 88.888.3/20220121 |
