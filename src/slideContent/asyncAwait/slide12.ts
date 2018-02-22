export const slide12 = `## Best Practices

#### Third-party Library
- important to \`ConfigureAwait(false)\`
- slight performance increase 
- default implementation can cause deadlocks

\`\`\` c#
protected async void button1_Click(object sender, EventArgs e)
{
    int result = await DoSomeWorkAsync();
}

private async Task<int> DoSomeWorkAsync()
{
    await Task.Delay(100).ConfigureAwait(true);
    return 1;
}
`
