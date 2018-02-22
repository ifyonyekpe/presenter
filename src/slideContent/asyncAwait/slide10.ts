export const slide10 = `## Best Practices

#### Deadlock Scenerio
  \`\`\` c#
// My "library" method.
public static async Task<JObject> GetJsonAsync(Uri uri)
{
    using (var client = new HttpClient())
    {
        var jsonString = await client.GetStringAsync(uri);
        return JObject.Parse(jsonString);
    }
}

// My "top-level" method.
public class MyController : ApiController
{
    public string Get()
    {
        var jsonTask = GetJsonAsync(...);
        return jsonTask.Result.ToString();
    }
}
  \`\`\`
`
