export const slide15 = `## Best Practices

#### Avoid Async Void
- specific purpose to make asynchronous event handlers possible.
- exceptions are not captured naturally
    - can be observed using \`AppDomain.UnhandledException\`
- different composing semantics
- difficult to test

\`\`\` c#
async void MyMethodAsync()
{
  // Do asynchronous work.
  await Task.Delay(1000);
}
`