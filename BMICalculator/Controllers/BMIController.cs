using System.Reflection.Metadata.Ecma335;
using System.Runtime.Intrinsics.X86;
using Microsoft.AspNetCore.Builder.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WebAppController : ControllerBase
    {

        [HttpGet]
        private double ConvertFtInToIn(int feet, double inches)
        {
            return Convert.ToDouble(feet) * 12.0 + inches;
        }

        private double GetBMI(double inc, double lb)
        {
            return 703 * lb / (inc * inc);
        }

        private string GetBMIType (Func<double,double, double> bmi, double h, double w)
        {
            //height and weight arguments default to Metric
            string bmiType = bmi(h,w) switch
            {
                < 16.0 => "Severely Thin",
                < 17.0 => "Thin",
                < 18.5 => "Underweight",
                < 25.0 => "Normal",
                < 30.0 => "Overweight",
                < 35.0 => "Obese",
                _      => "Severely Obese",
            };

            return bmiType;
        }

        public IActionResult GetBMI()
        {
            var BMI = new {heightft = 5, heightin = 9.5, weight = 190.0};
            return Ok(BMI); 
        }

    }
}