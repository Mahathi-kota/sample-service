package io.swagger.samples.inflector.springboot.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.ws.rs.core.Link;

import org.apache.commons.lang3.NotImplementedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import io.swagger.samples.outbound.USerDetails;

@Component
public class UserResource implements Resource {
  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Override
  public List<Link> getLinks() {
    throw new NotImplementedException("TODO");
  }
  
  /**
   * This method will return list uses present in the Database
   * @return List<USerDetails> 
   */
  
  public USerDetails getUserDetails(){
	  String usrDetailsQuery= "Select Name,DoB from UserDetails";
	  
	// USerDetails customer = (USerDetails) jdbcTemplate.query(usrDetailsQuery, new CustomerRowMapper());
	  USerDetails customer=null;
		List<Map<String, Object>> rows = getJdbcTemplate().queryForList(usrDetailsQuery);
		for (Map row : rows) {
			customer = new USerDetails();
	  		customer.setDOB((String) row.get("DoB"));
	  		String[] details= row.get("Name").toString().split(",");
	  		customer.setGivenName(details[1].trim());
	  		customer.setSurname(details[0].trim());	  		
		}

	  
	return customer;
	  
	  
  }
  
  public class CustomerRowMapper implements RowMapper
  {
  	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
  		USerDetails customer = new USerDetails();
  		customer.setDOB(rs.getString("DoB"));
  		String[] details= rs.getString("Name").split(",");
  		customer.setGivenName(details[1]);
  		customer.setSurname(details[0]);
  		return customer;
  	}

  }

/**
 * @return the jdbcTemplate
 */
public JdbcTemplate getJdbcTemplate() {
	return jdbcTemplate;
}

/**
 * @param jdbcTemplate the jdbcTemplate to set
 */
public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
	this.jdbcTemplate = jdbcTemplate;
}


}
