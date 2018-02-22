export const slide13 = `## Best Practices

#### Thread Duplication Solution
\`\`\` c#
protected async void MyButton_Click(object sender, EventArgs e)
{
    btnRead.Enabled = false;
    string content = await ReadFileAsync();
    btnRead.Enabled = true;
} 

private Task<string> ReadFileAsync()
{
    using (FileStream fs = new FileStream(“File path”, FileMode.Open))
    using (StreamReader sr = new StreamReader(fs))
    {
        return sr.ReadToEndAsync(); // 2
    }
}
`
