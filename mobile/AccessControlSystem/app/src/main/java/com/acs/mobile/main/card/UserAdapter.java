package com.acs.mobile.main.card;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.RecyclerView;

import com.acs.mobile.R;
import com.acs.mobile.model.main.DataModel;
import com.acs.mobile.model.main.UserDataModel;

import java.util.List;

import io.reactivex.annotations.NonNull;

public class UserAdapter extends RecyclerView.Adapter<UserAdapter.MyViewHolder> {


    private List<? extends DataModel> dataModelList;
    private Context mContext;

    public UserAdapter(List<? extends DataModel> dataModelList, Context mContext) {
        this.dataModelList = dataModelList;
        this.mContext = mContext;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.user_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        if (dataModelList.get(position) instanceof UserDataModel) {
            holder.bindData((UserDataModel) dataModelList.get(position), mContext);
        }
    }

    @Override
    public int getItemCount() {
        return dataModelList.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        TextView firstName;
        TextView lastName;
        TextView position;
        TextView department;
        TextView default_room;
        ImageView imageView;

        MyViewHolder(@NonNull View itemView) {
            super(itemView);
            firstName = itemView.findViewById(R.id.firstName);
            lastName = itemView.findViewById(R.id.lastName);
            position = itemView.findViewById(R.id.userPosition);
            department = itemView.findViewById(R.id.userDepartment);
            default_room = itemView.findViewById(R.id.userDefaultRoom);
            imageView = itemView.findViewById(R.id.image);
        }

        void bindData(UserDataModel dataModel, Context context) {
            firstName.setText(dataModel.getFirstName());
            lastName.setText(dataModel.getLastName());
            position.setText(dataModel.getPosition());
            department.setText(dataModel.getDepartament());
            default_room.setText(dataModel.getDefaultWorkingRoom());

            if (dataModel.getImage() != null) {
                String base64Image = dataModel.getImage().split(",")[1];
                byte[] decodedString = Base64.decode(base64Image, Base64.DEFAULT);
                Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
                imageView.setImageBitmap(decodedByte);
            } else {
                imageView.setImageDrawable(ContextCompat.getDrawable(context, R.drawable.user));
            }
        }


    }


}
