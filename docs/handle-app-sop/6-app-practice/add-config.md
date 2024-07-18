# 添加配置项

配置应用标识身份和企业节点地址信息。

## 方式一： 直接在代码中配置企业节点信息

```java
/**
 * 企业节点地址
 */
private static String url = "https://idhub-manage-a-qa.idx.space/";

/**
 * 应用标识身份
 */
private static String handleUser = "88.608.24061301/App_12306";

/**
 * 应用身份私钥
 */
private static String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
        "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKAZKtrFnsokJCA7urFQATZC3t\n" +
        "uWzWTcEJmfDeguGGsGSaNUnzFWKg0OpCydqQK429S2CJj1yMiYTPc81AISPCK9Qe9T7KJX0d0FM2\n" +
        "Y5R4qSrnQ+NmbpHRO4xiUzXvizNxJ84GhFLvn776gZWhfNtJKXN9/Grx6r53qJgRgy8APTsicCn8\n" +
        "28iQxPtSufiGQVKdPnypEOmtA4SkfXbQ7hJSponvLKkr+u5NxBqaP+hzdIDQS8j+ypn5XpEt/fH6\n" +
        "TrTOpDndok6aeFg6s7a0LG1A9fkyP8OVTvVKNVFbKj01VkY/XNssTtxHLEB3L+P2O8fRO03619KO\n" +
        "Qxe8Iak+aMAXAgMBAAECggEBAKA/MTGOuONMMI2X0oc8KIw5e2nLH7i9g7XvJbIOV4P2aEggn+Iz\n" +
        "A8OZF00WPckCk/UnV5SoYn2mFfJP5fHKmEhPZn2MhVvs81z0Rx6tTjmN0VgWdc1rR0eZGpthcTbu\n" +
        "0UchkYF/9R7cNa8Zny61EmvucwztcZUpaCEaYE/8JgvkHjMTUvHlZO6cvbYxVjeWxefswYUfVvhU\n" +
        "44U1qSF7/COMWRRgEx+xT5IFY1Iyje0sE5m83HsMbF/ZrpJiPoAqhGTz5fIezmTS5gsF80/Wlfd9\n" +
        "aKvrwyDU/zH/2+YF9WJ8443ChxXsEP4cDghu7rTpfOSVHCe5R4d1nidgU0nfiQkCgYEA5ivYgTuh\n" +
        "8gUP5QAQb0Z5WPkryruZ2bk7hGor6Pq+YKzJcoiNc+FqWGVpb1r2Zm4r+KbZyHi9kaylM+xx4g5t\n" +
        "nVkyn0EP46kR861crEBIoD+5p6Fo3kNPs5tkLXEgvV8SdAQ9FPiIwPwjuVLBttl9fF6454sO8tFG\n" +
        "TlgDZZxFVMsCgYEA4Kyf6XOiilrVCcgQFrbqUsihoA7+fWmAutx70i2D1Y6PcJzL2kou+TXwVLZ5\n" +
        "3fcSgq/rtJqhF/oMP/jUIdVU5jNTgNk5OYL13NByKANiU7VphW9QW9iIguXeSwly4iKMS0/UYwDv\n" +
        "vtE5o+5krUmwknjx95m55gNJ0k3D6cbtZGUCgYAnnN4rB6dMbsCYidVKQVe7D08RGg5VYUKz/E3I\n" +
        "T/cZzkLxOj0V93KE+hcWOhJz+HwK1DRhAx6lBpB8CjJjVFZbITHMJLdmV/+l720mm/2jzrPV/Lp+\n" +
        "nhkGcTTheTnIPaeAXgZhKJDonbxMNcju/ilRkT/DYbRV59xwuUcEYsuv1wKBgHzSKv2OCs2G7TjD\n" +
        "93xHHyPi5zh/XA/c33HxMLFyK/4nd7V+xxp9gF9gAiduQYJ508Tba74o8jrZ5phb667oUIScG1ZI\n" +
        "WKyE/4cwH1vvlV8gOIGzeBeu0xi2EKvrkfHkc8EblslyKb//iWBz/2buu7SEkRmYRFlvlkHKhn+I\n" +
        "zzapAoGBANoFIhR6flrYu4UHd7xOjwZURfeG1lWzN/mPLRqqVC62GXmRb5M4eFVqy8/OV7eNjER8\n" +
        "ynMjbPMMKswFJyloDh2X5INsieRW/amVNf3SMgUXMJPyLAzqQRw1RHUehN2cp3BPgFvlH2A9jdPe\n" +
        "tnq3UP4o0i0gZp/xY2ZKgihdnFSP\n" +
        "-----END PRIVATE KEY-----";
```

## 方式二： 通过JavaConfig方式配置企业节点信息

### 配置类

```java
@Data
@Configuration
@ConfigurationProperties(prefix = "app.idhub")
public class IdhubProperties {

    /**
     * 企业节点地址
     */
    private String url;
    
    /**
     * 应用标识身份
     */
    private String handleUser;

    /**
     * 私钥
     */
    private String privateKey;
}
```

### application.yml配置文件

```yaml
# 企业节点配置    
app:
  idhub: 
    url: https://idhub-manage-a-qa.idx.space/
    handle-user: 88.608.24061301/App_12306
    private-key: |-
      -----BEGIN PRIVATE KEY-----
      MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCNa+oluRrSLGPNki9357nuxQkL
      t8jLWb5FieYJsG5qAk040nXmJpe2GpJLeTyfwyuZy1lE0yhYzMPk57bZg8v1z3zttKD17jVaSK8H
      ono7alD9i1z7r0AXdaHjy5QivW3CORiiZLdqRvaBh+P5KXHwzAj+WJV7xc4lulsoPkpQfTJXcK6g
      mPSlISabtgexd/U4lipykKZ7BOhQzJQ+qTorEG8auYMreDykPnDizJMzCqV89roQcW0R4AiSgE7y
      XYWJkdY70w87Io4Lh2uzOzn8i15yAi3GEEztYkSE9T2FzTb9RGahwGmsw3L5Hy20Op/ae2IFgjQW
      XdosncmtEj/1AgMBAAECggEBAISLQs2OOkwHXJa7zw9zOHlHZB3+ZwvnlYP5JYepOyLR+2wpHGTT
      gNck+j4QZ7hYpJGk24q82RC5AVSVs3MTqmI80Bq9cypr0sdGXf0q06LCFxw6tLAS5V/XWR51m+Yf
      YjJpbuQsvxa1Ya2vHgRVSrvjjv5LKfbyQi5sBamnD+F0vqu68OgnfUtTBybgqvf1u2lsotXDJA7u
      ft4t9NkIWd7Z1pvA/3wVnA34v/3clF7Mp701kOpn6AWCGsArbHXdtkD23dpr8P2giKvAbDSuMDvy
      pNpeiVWQ1xtEjphGJL/hCJYW/lpvGtQYFBk4OXtFkxZQf2ld9HcffmcmeXNzWOECgYEA1AWMsXXZ
      BdGdOYzwcNLsBpvzgj1jht+yMzzVG9BvoWCwgZyct3juLJjFVD57Ijv6DrNaw0jp84e9OtI/2zQz
      U41lrftC1TvvUhvO+Shn/tSBahl8i4uGEaH3oVeWLBoFY4rjXbTQrNuz4IZsXzX/PPb+iiX/D8qu
      wxEC8kUzAvkCgYEAqsF2+Qg4zD4QdoEkSGhRvlxALcFpN0Ev/6IgqS+Oi7YIZbxl5OMrRft5QPUr
      5HU9xBRtvPjMOJ6x/gRx5YGluYpi5v3EP2AKmc6ZM5MOD2og5i74rNO3B1nBWGYfGao1AzfDuy1f
      i+xRmh6oPhBFq8SAbK+H4q1aUZvclyeq590CgYBzZ3HlRhgSqr3BjY1yW9xM3KX2xiNeTnRYn0wA
      D7wzQsXQRsamtxQtAhqmeDvdrne1eLp2gUGWZNQDKF3Jmug1Gkm2IYWHO1BQiQJnbC7u7gxjC+xW
      qGMZRefb0ijTaHZ2cCrB3qGW9R87nu9uA54iOO7jkzr6BYCKfL/1zuStQQKBgAJToohgKU33JohG
      2DS4XyzF2wYEladwFvRXxDQp9rpGn7SrLYRB6CwK8isFbDSvuEi8soYZqca3utsoOlkTPCvcC97z
      5EGs0FgqLYI7ZbymCI66Yx8Pv3W1LmJC+feCjzhdASjCxIOGk9ISyt4VoK1nfwx8E9Dt5cYo5oeU
      vcptAoGAANLM52h5IZuGYAAuJ5ooGJ6D+TZk2DIqRxFuGOFHug4dw3Q9+XRsv0bVKnQDtXpL66+P
      OwSz3qtNJFT6sn9gbfX6H+mtCagne5ag7BhMn/hExMd6fehPljsWN2S7SpKUXZR4b2afv0QIPLlP
      kf53PHONkbQChxas0Q2/iU21Oc4=
      -----END PRIVATE KEY-----
```