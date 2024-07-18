# 创建测试Controller

创建测试Controller，调用标识数据解析方法

```java
@RestController
@RequestMapping("/api/v1/handle")
@RequiredArgsConstructor
public class ApiController {
    
    @Autowired
    private ResolveService resolveService;

    /**
     * 标识数据查询
     *
     * @param handle
     * @return
     */
    @GetMapping("/resolve")
    private Object dataResolve(@RequestParam(name = "handle") String handle)  {
        Object data = resolveService.resolve(handle);
        return data;
    }
}
```