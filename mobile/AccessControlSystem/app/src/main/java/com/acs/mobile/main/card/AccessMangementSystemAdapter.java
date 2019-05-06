package com.acs.mobile.main.card;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.acs.mobile.R;
import com.acs.mobile.model.main.AccessMangementDataModel;
import com.acs.mobile.model.main.DataModel;

import java.util.List;

public class AccessMangementSystemAdapter extends RecyclerView.Adapter<AccessMangementSystemAdapter.MyViewHolder> {

    private List<? extends DataModel> dataModelList;
    private Context mContext;

    public AccessMangementSystemAdapter(List<? extends DataModel> dataModelList, Context mContext) {
        this.dataModelList = dataModelList;
        this.mContext = mContext;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.access_management_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        if (dataModelList.get(position) instanceof AccessMangementDataModel) {
            holder.bindData((AccessMangementDataModel) dataModelList.get(position), mContext);
        }
    }

    @Override
    public int getItemCount() {
        return dataModelList.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        public TextView name;
        public TextView position;
        TextView department;
        TextView default_room;
        TextView roomIdDoorId;


        MyViewHolder(@NonNull View itemView) {
            super(itemView);
            name = itemView.findViewById(R.id.fullName);
            position = itemView.findViewById(R.id.position);
            department = itemView.findViewById(R.id.department);
            default_room = itemView.findViewById(R.id.defaultRoom);
            roomIdDoorId = itemView.findViewById(R.id.roomIdDoorId);
        }

        void bindData(AccessMangementDataModel dataModel, Context context) {
            name.setText(dataModel.getFullName());
            position.setText(dataModel.getPosition());
            department.setText(dataModel.getDepartment());
            default_room.setText(dataModel.getDefaultRoom());
            roomIdDoorId.setText(dataModel.getRoom() + " - " + dataModel.getDoorId());
        }


    }


}
