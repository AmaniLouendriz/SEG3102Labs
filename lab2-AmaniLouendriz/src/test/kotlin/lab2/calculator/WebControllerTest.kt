package lab2.calculator

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@WebMvcTest

class WebControllerTest {
    @Autowired
    // making web requests and treating them by a controller without the need to have a functional server
    lateinit var mockMvc : MockMvc

    @Test
    fun request_to_home() {
        mockMvc.perform(MockMvcRequestBuilders.get("/"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    // addition test cases
    @Test
    fun add2and2() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","2")
            .param("secondNumber","2")
            .param("operation","add")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","4.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun add1000and0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","1000")
            .param("secondNumber","0")
            .param("operation","add")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","1000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun add0and0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","0")
            .param("secondNumber","0")
            .param("operation","add")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","0.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun addNeg1000and2000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","2000")
            .param("operation","add")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","1000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun addNeg1000andNeg3000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","-3000")
            .param("operation","add")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","-4000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun add22Halfand22() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","22.5")
            .param("secondNumber","22.87")
            .param("operation","add")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","45.370"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }


    //Substraction test cases
    @Test
    fun substract2and2() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","2")
            .param("secondNumber","2")
            .param("operation","substract")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","0.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun substract1000and0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","1000")
            .param("secondNumber","0")
            .param("operation","substract")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","1000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }
    
    @Test
    fun substract0and0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","0")
            .param("secondNumber","0")
            .param("operation","substract")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","0.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun substractNeg1000and2000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","2000")
            .param("operation","substract")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","-3000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun substractNeg1000andNeg3000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","-3000")
            .param("operation","substract")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","2000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun substract22HalfAnd22() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","22.5")
            .param("secondNumber","22.87")
            .param("operation","substract")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","-0.370"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    // Multiplication test cases
    @Test
    fun multiply2And2() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","2")
            .param("secondNumber","2")
            .param("operation","multiply")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","4.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test    
    fun multiply1000And0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","1000")
            .param("secondNumber","0")
            .param("operation","multiply")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","0.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun multiply0And0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","0")
            .param("secondNumber","0")
            .param("operation","multiply")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","0.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun multiplyNeg1000And2000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","2000")
            .param("operation","multiply")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","-2000000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun multiplyNeg1000AndNeg3000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","-3000")
            .param("operation","multiply")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","3000000.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun multiply22AndHalfAnd22() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","22.5")
            .param("secondNumber","22.87")
            .param("operation","multiply")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","514.575"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    // Division test cases

    @Test
    fun divide2And2() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","2")
            .param("secondNumber","2")
            .param("operation","divide")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","1.000"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun divide1000And0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","1000")
            .param("secondNumber","0")
            .param("operation","divide")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","Infinity"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun divide0And0() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","0")
            .param("secondNumber","0")
            .param("operation","divide")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","NaN"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun divideNeg1000And2000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","2000")
            .param("operation","divide")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","-0.500"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun divideNeg1000AndNeg3000() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","-1000")
            .param("secondNumber","-3000")
            .param("operation","divide")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","0.333"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun divide22AndHalfAnd22() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","22.5")
            .param("secondNumber","22.87")
            .param("operation","divide")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("result","0.984"))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    // Erroneous test cases
    @Test
    fun addErrorAnd1() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","1O")
            .param("secondNumber","1")
            .param("operation","add")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("error","NumberFormatError"))
        .andExpect(MockMvcResultMatchers.model().attribute("result",""))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun InvalidOperation() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
            .param("firstNumber","1")
            .param("secondNumber","1")
            .param("operation","addd")
        )
        .andExpect(MockMvcResultMatchers.status().isOk)
        .andExpect(MockMvcResultMatchers.model().attribute("error","OperationFormatError"))
        .andExpect(MockMvcResultMatchers.model().attribute("result",""))
        .andExpect(MockMvcResultMatchers.view().name("home"))
    }
}