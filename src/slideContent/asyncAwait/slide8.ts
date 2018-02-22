export const slide8 = `## Async Await In Depth

#### Context
  \`\`\` c#
  protected async void MyButton_Click(object sender, EventArgs e)
  {
    // Since we asynchronously wait, the ASP.NET thread is not blocked by the file download.
    // This allows the thread to handle other requests while we're waiting.
    await DownloadFileAsync(...);

    // Since we resume on the ASP.NET context, we can access the current request.
    // We may actually be on another *thread*, but we have the same ASP.NET request context.
    Response.Write("File downloaded!");
  }
  \`\`\`

#### Avoiding Context
  \`\`\` c#
  private async Task DownloadFileAsync(string fileName)
  {
    // First code started with an ASP.NET context
    // Use HttpClient or whatever to download the file contents.
    var fileContents = await DownloadFileContentsAsync(fileName).ConfigureAwait(false);

    // Note that because of the ConfigureAwait(false), we are not on the original context here.
    // Instead, we're running on the thread pool.

    // Write the file contents out to a disk file.
    await WriteToDiskAsync(fileName, fileContents).ConfigureAwait(false);

    // The second call to ConfigureAwait(false) is not *required*.
  }
  \`\`\`
`
