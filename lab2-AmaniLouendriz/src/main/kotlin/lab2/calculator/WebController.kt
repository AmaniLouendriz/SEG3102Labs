// package name
package lab2.calculator
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam


@Controller

class WebController {
    // initializing model attributes
    @ModelAttribute
    // the following would be executed before anything
    fun addAttributes(model: Model) {
        model.addAttribute("error","")
        model.addAttribute("firstNumber","")
        model.addAttribute("secondNumber","")
        model.addAttribute("result","")
    }

    @RequestMapping("/")
    fun home(): String {
        return "home"   // this is mapped to home.html under src/resources/templates
    }

    @GetMapping(value=["/calculate"])

    fun calculate(
        @RequestParam(value="firstNumber",required=false) firstNumber: String,
        @RequestParam(value="secondNumber",required=false) secondNumber: String,
        @RequestParam(value="operation",required=false) operation:String,
        model: Model
    ):String {
        var firstNumberVal: Double
        var secondNumberVal: Double
        var resultVal: Double
        when (operation) {
            "add" ->
                try {
                    firstNumberVal = firstNumber.toDouble()
                    secondNumberVal = secondNumber.toDouble()
                    resultVal = firstNumberVal + secondNumberVal
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                    model.addAttribute("result",String.format("%.3f",resultVal))
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error","NumberFormatError")
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                }

            "substract" ->
                try {
                    firstNumberVal = firstNumber.toDouble()
                    secondNumberVal = secondNumber.toDouble()
                    resultVal = firstNumberVal - secondNumberVal
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                    model.addAttribute("result",String.format("%.3f",resultVal))
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error","NumberFormatError")
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                }

            "multiply" ->
                try {
                    firstNumberVal = firstNumber.toDouble()
                    secondNumberVal = secondNumber.toDouble()
                    resultVal = firstNumberVal * secondNumberVal
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                    model.addAttribute("result",String.format("%.3f",resultVal))
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error","NumberFormatError")
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                }

            "divide" ->
                try {
                    firstNumberVal = firstNumber.toDouble()
                    secondNumberVal = secondNumber.toDouble()
                    resultVal = firstNumberVal / secondNumberVal
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                    model.addAttribute("result",String.format("%.3f",resultVal))
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error","NumberFormatError")
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                }

                else -> {
                    model.addAttribute("error","OperationFormatError")
                    model.addAttribute("firstNumber",firstNumber)
                    model.addAttribute("secondNumber",secondNumber)
                }
        }
        return "home"
    }
}




