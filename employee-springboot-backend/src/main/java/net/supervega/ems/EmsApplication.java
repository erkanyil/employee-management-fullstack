package net.supervega.ems;

import net.supervega.ems.model.Employee;
import net.supervega.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmsApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmsApplication.class, args);

	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		Employee e1 = new Employee("Erkan","Yildirim","erk@gmail.com");
		employeeRepository.save(e1);
		Employee e2 = new Employee("Fatma","Yildirim","fati@gmail.com");
		employeeRepository.save(e2);
		Employee e3 = new Employee("Betu","Yildirim","bet@gmail.com");
		employeeRepository.save(e3);
		Employee e4 = new Employee("Ceyo","Yildirim","ceyß@gmail.com");
		employeeRepository.save(e4);

	}
}
