export const slide13 = `## Best Practices

#### Thread Duplication
\`\`\` c#
protected async void MyButton_Click(object sender, EventArgs e)
{
    btnRead.Enabled = false;
    string content = await ReadFileAsync();
    btnRead.Enabled = true;
} 

private Task<string> ReadFileAsync()
{
    return Task.Run(() => // 1
    {
        using (FileStream fs = new FileStream(“File path”, FileMode.Open))
        using (StreamReader sr = new StreamReader(fs))
        {
            return sr.ReadToEnd(); // 2
        }
    });
}
`
