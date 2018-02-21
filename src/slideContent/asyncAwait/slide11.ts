export const slide11 = `## Deadlocks

#### Scenerio 2
  \`\`\` c#
  protected void MyButton_Click(object sender, EventArgs e)
  {
      Task<string> s = LoadStringAsync();
      var fullName = s.Result; // warning: buggy
  }

  public async Task<string> LoadStringAsync()
  {
      string firstName = await GetFirstNameAsync();
      string lastName = await GetLastNameAsync();
      return firstName + ” ” + lastName;
  }
  \`\`\`

- The \`Task\<string\>.Result\` property is strongly typed as a String.
  - Thus, it can't return until it has the valid result string send back; so it blocks until the result is available.
- The \`UI\` thread blocks for \`LoadStringAsync\` to complete.
- Howerver, \`LoadStringAsync’s\` implementation depends on being able to post code asynchronously back to the \`UI\` to be executed,
  and the task returned from \`LoadStringAsync\` won’t complete until it does.
- \`LoadStringAsync\` is waiting for \`MyButton_Click\` to complete, and \`MyButton_Click\` is waiting for \`LoadStringAsync\` to complete.

#### Solution
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
`
