export const slide11 = `## Best Practices

#### Deadlock Scenerio Solution
- Async all the way up

\`\`\` c#
public async void Button1_Click(...)
{
  var json = await GetJsonAsync(...);
  textBox1.Text = json;
}

public class MyController : ApiController
{
  public async Task<string> Get()
  {
    var json = await GetJsonAsync(...);
    return json.ToString();
  }
}
\`\`\`

> Note: Deadlock cannot be avoided in ASP.NET child actions
> \`\`\` c#
> @Html.Action("SomeAction", "SomeController")  
> \`\`\`
`
