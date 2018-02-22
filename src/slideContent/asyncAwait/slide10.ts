export const slide10 = `## Best Practices

#### Deadlock Scenerio
  \`\`\` c#
  protected void MyButton_Click(object sender, EventArgs e)
  {
      Task<string> s = LoadStringAsync();
      var fullName = s.Result; //1
  }

  public async Task<string> LoadStringAsync()
  {
      string firstName = await GetFirstNameAsync(); //2
      string lastName = await GetLastNameAsync(); //3
      return firstName + ” ” + lastName;
  }
  \`\`\`
`
