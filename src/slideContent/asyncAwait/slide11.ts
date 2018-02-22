export const slide11 = `## Best Practices

#### Deadlock Scenerio Solution
  \`\`\` c#
  protected async void MyButton_Click(object sender, EventArgs e)
  {
      // Returning value
      Task<string> s = LoadStringAsync();
      var fullName = await s;

      // Non-returning value
      Task s = DoWork();
      await s;
  }
  \`\`\`

  > Note: Deadlock cannot be avoided in ASP.NET child actions
  > \`\`\` c#
  > @Html.Action("SomeAction", "SomeController")  
  > \`\`\`
`
