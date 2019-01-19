package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Direction;
import io.swagger.model.DoorLock;
import io.swagger.model.Employee;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Action
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-11-19T06:18:30.042Z")

public class Action   {
  @JsonProperty("id")
  private UUID id = null;

  @JsonProperty("employee")
  private Employee employee = null;

  @JsonProperty("doorLock")
  private DoorLock doorLock = null;

  @JsonProperty("direction")
  private Direction direction = null;

  @JsonProperty("gendate")
  private OffsetDateTime gendate = null;

  public Action id(UUID id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "s552ss1asdee-6c54-4b01-90e6-asdg4sedsf", required = true, value = "")
  @NotNull

  @Valid

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public Action employee(Employee employee) {
    this.employee = employee;
    return this;
  }

  /**
   * Get employee
   * @return employee
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public Employee getEmployee() {
    return employee;
  }

  public void setEmployee(Employee employee) {
    this.employee = employee;
  }

  public Action doorLock(DoorLock doorLock) {
    this.doorLock = doorLock;
    return this;
  }

  /**
   * Get doorLock
   * @return doorLock
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public DoorLock getDoorLock() {
    return doorLock;
  }

  public void setDoorLock(DoorLock doorLock) {
    this.doorLock = doorLock;
  }

  public Action direction(Direction direction) {
    this.direction = direction;
    return this;
  }

  /**
   * Get direction
   * @return direction
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public Direction getDirection() {
    return direction;
  }

  public void setDirection(Direction direction) {
    this.direction = direction;
  }

  public Action gendate(OffsetDateTime gendate) {
    this.gendate = gendate;
    return this;
  }

  /**
   * Get gendate
   * @return gendate
  **/
  @ApiModelProperty(example = "2016-08-29T09:12:33.001Z", required = true, value = "")
  @NotNull

  @Valid

  public OffsetDateTime getGendate() {
    return gendate;
  }

  public void setGendate(OffsetDateTime gendate) {
    this.gendate = gendate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Action action = (Action) o;
    return Objects.equals(this.id, action.id) &&
        Objects.equals(this.employee, action.employee) &&
        Objects.equals(this.doorLock, action.doorLock) &&
        Objects.equals(this.direction, action.direction) &&
        Objects.equals(this.gendate, action.gendate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, employee, doorLock, direction, gendate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Action {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    employee: ").append(toIndentedString(employee)).append("\n");
    sb.append("    doorLock: ").append(toIndentedString(doorLock)).append("\n");
    sb.append("    direction: ").append(toIndentedString(direction)).append("\n");
    sb.append("    gendate: ").append(toIndentedString(gendate)).append("\n");
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

