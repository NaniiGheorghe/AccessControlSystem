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
 * Key
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-11-19T06:18:30.042Z")

public class Key   {
  @JsonProperty("id")
  private UUID id = null;

  @JsonProperty("accessibleDoorLocks")
  private DoorLock accessibleDoorLocks = null;

  public Key id(UUID id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "s5521ee-6c5asdas4-4b01-90e6-d701748f0851", required = true, value = "")
  @NotNull

  @Valid

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public Key accessibleDoorLocks(DoorLock accessibleDoorLocks) {
    this.accessibleDoorLocks = accessibleDoorLocks;
    return this;
  }

  /**
   * Get accessibleDoorLocks
   * @return accessibleDoorLocks
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public DoorLock getAccessibleDoorLocks() {
    return accessibleDoorLocks;
  }

  public void setAccessibleDoorLocks(DoorLock accessibleDoorLocks) {
    this.accessibleDoorLocks = accessibleDoorLocks;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Key key = (Key) o;
    return Objects.equals(this.id, key.id) &&
        Objects.equals(this.accessibleDoorLocks, key.accessibleDoorLocks);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, accessibleDoorLocks);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Key {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    accessibleDoorLocks: ").append(toIndentedString(accessibleDoorLocks)).append("\n");
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

