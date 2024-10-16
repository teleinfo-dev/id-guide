# 标识注册

- **方法功能**：创建新的标识
- **方法描述**
  - overwrite=true 创建标识，覆盖式更新，无论标识是否存在，原有标识属性全部替代为传入标识属性
  - overwrite=false 创建标识，如果标识存在则返回错误信息

```java
/**
 * Creates a new handle. If the handle already exists, the method will throw
 * an exception. The proper course of action is then to delete the handle
 * and call the method again.
 *
 * @param handle The handle to create
 * @param values An array of handle values to add to the handle.
 * @throws IDException Describes the error that occured in the process of creating the handle.
 * overwrite default value is false
 */
void createHandle(String handle, HandleValue[] values) throws IDException;
```

```java
/**
 * you could set the value of overwrite by yourself; true or false
 */
void createHandle(String handle, HandleValue[] values, boolean overwrite) throws IDException;
```

- **方法参数**

| 参数      | 类型          | 参数描述           | 示例              |
| --------- | ------------- | ------------------ | ----------------- |
| handle    | String        | 标识名称           | 88.888.3/20220121 |
| values    | HandleValue[] | 标识属性值         |                   |
| overwrite | boolean       | 可根据使用方式选择 | true / false      |
