package io.swagger.samples.inflector.springboot.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.ws.rs.core.Link;

import org.apache.commons.lang3.NotImplementedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
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
	  USerDetails customer = (USerDetails) jdbcTemplate.queryForObject(usrDetailsQuery, new CustomerRowMapper());
		/*List<Map<String, Object>> rows = getJdbcTemplate().queryForList(usrDetailsQuery);
		for (Map row : rows) {
			customer = new USerDetails();
	  		customer.setDOB((String) row.get("DoB"));
	  		String[] details= row.get("Name").toString().split(",");
	  		customer.setGivenName(details[1].trim());
	  		customer.setSurname(details[0].trim());	  		
		}*/

	  
	return customer;
	  
	  
  }
  
	public class CustomerRowMapper implements RowMapper {

		public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
			USerDetails customer = new USerDetails();
			String[] details = null;
			String date = rs.getString("DoB");
			
			customDateConverter(customer, date);
			if (!"".equals(rs.getString("Name")) && null != rs.getString("Name")) {
				details = rs.getString("Name").split(",");
			}
			if (details.length > 0) {
				for (int i = 0; i < details.length; i++) {
					if (i == 0)
						customer.setSurname(details[0].trim());
					if (i == 1)
						customer.setGivenName(details[1].trim());

				}
			}

			return customer;
		}

		private void customDateConverter(USerDetails customer, String date) {

			String dateTargetPattern = "yyyy-MM-dd"; // numeric 2 digit month
	        String  dateInputPattern = "dd/MMM/yyyy"; // 01/Jan/1768 For 3 char month name
	        SimpleDateFormat sdf = new SimpleDateFormat(dateInputPattern);
			try {
		        java.util.Date dt = sdf.parse( date );
		        sdf.applyPattern(dateTargetPattern);
		        customer.setDOB(sdf.format(dt));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
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
