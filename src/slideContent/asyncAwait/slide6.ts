export const slide6 = `## Async Await In Depth

#### Asynchronous methods
- marked with contextual keyword async. 
- compiler only performs some special transformation to the method.

\`\`\` c#
public async Task DoSomethingAsync()
{
    await Task.Delay(100);
}
\`\`\`

---

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
`
