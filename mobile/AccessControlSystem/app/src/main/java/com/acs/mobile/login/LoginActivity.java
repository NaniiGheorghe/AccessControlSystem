package com.acs.mobile.login;

import android.content.Intent;
import android.os.Bundle;

import com.acs.mobile.MainActivity;
import com.acs.mobile.R;
import com.acs.mobile.di.App;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.textfield.TextInputLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Objects;

import javax.inject.Inject;

import butterknife.BindView;
import butterknife.OnClick;

public class LoginActivity extends AppCompatActivity implements LoginActivityMVP.View {

    @Inject
    LoginActivityMVP.Presenter presenter;

    @BindView(R.id.useraname)
    public TextInputLayout username;

    @BindView(R.id.password)
    public TextInputLayout password;

    @BindView(R.id.loginButton)
    public Button login;

    @OnClick(R.id.loginButton)
    void authentiticate() {
        this.presenter.loginButtonClicked();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        ((App) getApplication()).getComponent().inject(this);
    }

    @Override
    public String getUsername() {
        return Objects.requireNonNull(this.username.getEditText()).getText().toString();
    }

    @Override
    public String getPassword() {
        return Objects.requireNonNull(this.password.getEditText()).getText().toString();
    }

    @Override
    public void showInputError(String message) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void goToNextView() {
        Intent intent = new Intent(getBaseContext(), MainActivity.class);
        startActivity(intent);
    }

    @Override
    public void onResume() {
        super.onResume();
        presenter.setView(this);
    }

}
