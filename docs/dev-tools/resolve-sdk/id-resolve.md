# 标识解析

### 标识解析

- **方法功能**：提供标识解析查询服务，用户可通过标识查询接口查询标识详细信息
- **方法描述**

```java
/**
 * Resolves a handle and returns a set of handle values
 *
 * @param handle The value of the handle to resolve
 * @exception IDException Describes the error in resolution
 */
HandleValue[] resolveHandle(String handle) throws IDException
```

```java
/**
 * Resolves a handle and returns a set of handle values that satisfy the
 * type filter specified. If the resolution is to retrieve all handle
 * values, specify null for both filter and indexes. If the administrative
 * priveleges are applicable, the restricted values will also be returned.
 * Also, the resolution request is not authoritative.
 *
 * @param handle The value of the handle to resolve
 * @param types The types of the handle values that we are looking for.
 * @exception IDException Describes the error in resolution
 */
HandleValue[] resolveHandle(String handle, String[] types, int[] indexes) throws IDException;
```

- **方法参数**

| 参数    | 类型     | 参数描述     | 示例                |
| ------- | -------- | ------------ | ------------------- |
| handle  | String   | 标识名称     | 88.888.3/20220121   |
| types   | String[] | 标识属性类型 | new String[]{"URL"} |
| indexes | int[]    | 标识属性索引 | new int[]{}         |
