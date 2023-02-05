package com.example.smg_insta.DTO;

import com.google.gson.annotations.SerializedName;

public class LoginResponse {

    @SerializedName("token")
    private String token;

    @SerializedName("id")
    private String id;

    @SerializedName("accountId")
    private String accountId;

    public String getId() {
        return id;
    }

    public String getAccountId() {
        return accountId;
    }

    public String getToken() {
        return this.token;
    }

}
