using Neutron.Scripts;
using StringMath;

namespace NeutronCalculator;

internal class Program
{
    [STAThread]
    static void Main(string[] args)
    {
        Application application;

#if DEBUG
        application = new Application(title: "NeutronCalculator", width: 320, height: 512, webContentPath: Path.Combine(AppContext.BaseDirectory, "dist"), debug: true);
#else
        application = new Application(title: "NeutronCalculator", width: 320, height: 512, webContentPath: Path.Combine(AppContext.BaseDirectory, "dist"));
#endif

        application.SetMinSize(width: 320, height: 512);

        application.Bind("evaluateExpression", (string expression) =>
        {
            Console.WriteLine($"Received expression: {expression}");

            if (expression is null)
            {
                throw new Exception("Expression is null");
            }

            string expressionResult;

            try
            {
                expressionResult = expression.Replace("x", "*").Replace("÷", "/").Eval().ToString();
            }
            catch (Exception)
            {
                expressionResult = "Error";
            }

            return expressionResult;
        });

        application.Run();
    }
}