package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.DoorLock;
import java.util.UUID;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * OfficeRoom
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-11-19T06:18:30.042Z")

public class OfficeRoom   {
  @JsonProperty("id")
  private UUID id = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("doorLocks")
  private DoorLock doorLocks = null;

  public OfficeRoom id(UUID id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "s5521essadwe-6c54-4b01-90e6-d701748f0851", required = true, value = "")
  @NotNull

  @Valid

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public OfficeRoom name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "Meeting room", required = true, value = "")
  @NotNull


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public OfficeRoom doorLocks(DoorLock doorLocks) {
    this.doorLocks = doorLocks;
    return this;
  }

  /**
   * Get doorLocks
   * @return doorLocks
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public DoorLock getDoorLocks() {
    return doorLocks;
  }

  public void setDoorLocks(DoorLock doorLocks) {
    this.doorLocks = doorLocks;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OfficeRoom officeRoom = (OfficeRoom) o;
    return Objects.equals(this.id, officeRoom.id) &&
        Objects.equals(this.name, officeRoom.name) &&
        Objects.equals(this.doorLocks, officeRoom.doorLocks);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, doorLocks);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OfficeRoom {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    doorLocks: ").append(toIndentedString(doorLocks)).append("\n");
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

