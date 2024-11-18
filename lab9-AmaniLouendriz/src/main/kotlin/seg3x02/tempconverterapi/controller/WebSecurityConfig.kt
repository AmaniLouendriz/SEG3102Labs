package seg3x02.tempconverterapi.controller


import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.web.SecurityFilterChain
import org.springframework.http.HttpMethod

@Configuration
@EnableWebSecurity

class WebSecurityConfig {

    // specify identification info of app users. They are stored in Memory
    
    @Bean
    fun userDetailsService():UserDetailsService {
        val user1: UserDetails = User.withUsername("user1").password(passwordEncoder().encode("pass1")).roles("USER").build()
        val user2: UserDetails = User.withUsername("user2").password(passwordEncoder().encode("pass2")).roles("USER").build()
        return InMemoryUserDetailsManager(user1,user2)
    }


    @Bean
    // ignore static resources like CSS, images, JS
    fun webSecurityCustomizer(): WebSecurityCustomizer {
        return WebSecurityCustomizer { web: WebSecurity ->
            web.ignoring()
                .requestMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**","/vendor/**","/fonts/**") }
    }


    // Passwords are encoded using this
    @Bean
    fun passwordEncoder(): BCryptPasswordEncoder {
        return BCryptPasswordEncoder()
    }


    @Bean
    fun configure(http: HttpSecurity): SecurityFilterChain {
        http.csrf().disable()
        .authorizeRequests()
        .requestMatchers("/temperature-converter/**").hasAnyRole("USER","ADMIN")
        .anyRequest().authenticated()
        .and()
        .httpBasic();

        return http.build()
    }


}

