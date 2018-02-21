export const slide6 = `## Async Await In Depth

**Asynchronous methods** as a method marked with contextual keyword async. It doesn't necessarily mean that the method executes asynchronously.
It doesn't mean that the method is asynchronous at all. It only means that the compiler performs some special transformation to the method.

Asynchronous methods look something like this:
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


#### async operator
- is applied to a method to indicate it is asynchronous
- it does not run this method on a thread pool thread
- it runs synchronously until it hits the await

#### await operator
- is applied to task in an asynchronous method to suspend execution of the method until the awaited task completes
    > \`Task\`: unit of work with a promise to give you results back in the future; That promise could be backed by IO-operation or represent a computation-intensive operation.
        Results of the operation is **self-sufficient** and is a **first-class citizen**
        - You can store it in a variable
        - Return it from a method or pass it to another method
        - You can join the results together to form one
        - You can wait for results synchronously or you can "await" the result by adding "continuation" to the "future"


- it takes an argument, an awaitable (an asynchronous operation)
- examines the awaitable to see if it is already completed.
- if the awaitable is not complete, then it acts asynchronously by telling the awaitable to run the remainder of the method when it completes, and then returns the async method.
- later on, when the awaitable completes, it will execute the remainder of the async method on a context that was captured before the await returned.

`
