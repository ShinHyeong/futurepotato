package com.example.smg_insta.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.smg_insta.API.CrudService;
import com.example.smg_insta.DTO.MainPageResponse;
import com.example.smg_insta.R;

import java.util.List;

import de.hdodenhof.circleimageview.CircleImageView;

public class RVAdapter_story extends RecyclerView.Adapter<RVAdapter_story.ViewHolder> {
    Context context;
    private List<MainPageResponse.Story> data;
    private CrudService dataService;

    public RVAdapter_story(List<MainPageResponse.Story> data, Context context, CrudService dataService) {
        this.data = data;
        this.context = context;
        this.dataService = dataService;
    }

    @NonNull
    @Override
    public RVAdapter_story.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.story_item, parent, false);
        return new RVAdapter_story.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RVAdapter_story.ViewHolder holder, int position) {
        holder.onBind(data.get(position));

        holder.storyImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // 스토리 어떻게 띄울지...
            }
        });
    }

    @Override
    public int getItemCount() {
        return data.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        CircleImageView storyImage;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            storyImage = itemView.findViewById(R.id.civ_storyImage);

        }

        void onBind(MainPageResponse.Story item){
            Glide.with(context)
                    .load(item.getProfileImage())
                    .into(storyImage);
        }
    }
}