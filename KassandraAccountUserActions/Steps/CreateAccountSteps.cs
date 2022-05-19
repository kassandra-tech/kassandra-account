using KassandraWebTest.Framework;
using KassandraWebTest.Pages;
using KassandraWebTest.Steps;
using System;

using TechTalk.SpecFlow;

namespace KassandraAccountUserActions.Steps
{
    [Binding]
    class CreateAccountSteps : StepsBase
    {
        /// <summary>
        /// Constructor.
        /// <param name="browser">Allows interacting with elements.</param>
        /// </summary>
        public CreateAccountSteps(Browser browser) : base(browser)
        {
        }

        /// <summary>
        /// Enter text into a field.
        /// </summary>
        /// <param name="inputText">Text to enter into the field.</param>
        /// <param name="fieldName">Field identifier.</param>
        [StepDefinition(@"a unique ""(.*)"" is entered in the ""(.*)"" field")]
        public void UniqueTextEnteredInTheField(string inputText, string fieldName)
        {
            try
            {
                var input = !fieldName.ToLower().Contains("email") ? $"{inputText} {DateTime.Now:yyyy-dd-MM-hh-mm-ss-ffff}" : $"{inputText} {DateTime.Now:yyyy-dd-MM-hh-mm-ss-ffff}@test.net";
                Browser.Find.ElementById(PageBase.FieldElementName(fieldName)).SendKeys(input);
            }
            catch
            {
                throw;
            }
        }
    }
}
