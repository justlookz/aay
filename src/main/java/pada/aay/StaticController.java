package pada.aay;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticController {

    @GetMapping("{path:^(?!api|public|css|js|images|swagger)[^\\.]*}/**")
    public String handleForward() {
        return "forward:/";
    }

}
