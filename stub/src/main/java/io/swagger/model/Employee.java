package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Key;
import io.swagger.model.OfficeRoom;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Employee
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-11-19T06:18:30.042Z")

public class Employee   {
  @JsonProperty("key")
  private Key key = null;

  @JsonProperty("workingRoom")
  private OfficeRoom workingRoom = null;

  public Employee key(Key key) {
    this.key = key;
    return this;
  }

  /**
   * Get key
   * @return key
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public Key getKey() {
    return key;
  }

  public void setKey(Key key) {
    this.key = key;
  }

  public Employee workingRoom(OfficeRoom workingRoom) {
    this.workingRoom = workingRoom;
    return this;
  }

  /**
   * Get workingRoom
   * @return workingRoom
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public OfficeRoom getWorkingRoom() {
    return workingRoom;
  }

  public void setWorkingRoom(OfficeRoom workingRoom) {
    this.workingRoom = workingRoom;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Employee employee = (Employee) o;
    return Objects.equals(this.key, employee.key) &&
        Objects.equals(this.workingRoom, employee.workingRoom);
  }

  @Override
  public int hashCode() {
    return Objects.hash(key, workingRoom);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Employee {\n");
    
    sb.append("    key: ").append(toIndentedString(key)).append("\n");
    sb.append("    workingRoom: ").append(toIndentedString(workingRoom)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

