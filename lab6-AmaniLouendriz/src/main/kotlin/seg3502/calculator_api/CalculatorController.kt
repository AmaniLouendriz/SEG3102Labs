package seg3502.calculator_api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("calculator")
class CalculatorController {
    @GetMapping("/add/{nombre1}/{nombre2}")
    fun getAddition(@PathVariable nombre1:Double, @PathVariable nombre2:Double) = (nombre1+nombre2)

    @GetMapping("/subtract/{nombre1}/{nombre2}")
    fun getSubstraction(@PathVariable nombre1:Double, @PathVariable nombre2:Double) = (nombre1 - nombre2)

    @GetMapping("/multiply/{nombre1}/{nombre2}")
    fun getMultiplication(@PathVariable nombre1:Double, @PathVariable nombre2:Double) = (nombre1 * nombre2)

    @GetMapping("/divide/{nombre1}/{nombre2}")
    fun getDiviision(@PathVariable nombre1:Double, @PathVariable nombre2:Double) = (nombre1 / nombre2)
}