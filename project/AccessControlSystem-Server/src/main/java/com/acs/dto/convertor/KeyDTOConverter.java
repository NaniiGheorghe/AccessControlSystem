package com.acs.dto.convertor;

import com.acs.dto.ActionDTO;
import com.acs.dto.KeyDTO;
import com.acs.model.Action;
import com.acs.model.Key;
import com.acs.model.KeyTypeEnum;
import com.acs.service.KeyService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class KeyDTOConverter {

    @Autowired
    private ModelMapper modelMapper;

    public KeyDTO convertToDto(Key key) {
        KeyDTO keyDTO = new KeyDTO();
        keyDTO.setId(key.getId());
        keyDTO.setKeyValue(key.getKeyValue());
        keyDTO.setKeyValue2(key.getKeyValue2());
        keyDTO.setKeyValue3(key.getKeyValue3());
        keyDTO.setKeyValue4(key.getKeyValue4());
        keyDTO.setKeyName(key.getName());
        keyDTO.setKeyType(key.getKeyType().name());
        return keyDTO;
    }

    Key convertToEntity(KeyDTO keyDTO) {
        Key key = modelMapper.map(keyDTO, Key.class);
        if (keyDTO.getKeyType().equals("Finger Print")) {
            key.setKeyType(KeyTypeEnum.FINGERPRINT);
        } else if (keyDTO.getKeyType().equals("NFC Key")) {
            key.setKeyType(KeyTypeEnum.ELECTRONIC_KEY);
        }
        return key;
    }

}
