package com.acs.mobile.main;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.acs.mobile.R;
import com.acs.mobile.di.App;
import com.acs.mobile.login.LoginActivity;
import com.acs.mobile.main.card.AccessMangementSystemAdapter;
import com.acs.mobile.main.card.UserAdapter;
import com.acs.mobile.model.main.AccessMangementDataModel;
import com.acs.mobile.model.main.DataModel;
import com.acs.mobile.model.main.UserDataModel;

import androidx.core.view.GravityCompat;
import androidx.appcompat.app.ActionBarDrawerToggle;

import android.view.MenuItem;

import com.google.android.material.navigation.NavigationView;

import androidx.drawerlayout.widget.DrawerLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;


import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import butterknife.BindView;
import butterknife.ButterKnife;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener, MainActivityMVP.View {

    @Inject
    public MainActivityMVP.Presenter presenter;

    @BindView(R.id.recycler_view)
    public RecyclerView mRecyclerView;

    private RecyclerView.LayoutManager mLayoutManager;
    private RecyclerView.Adapter mAdapter;
    private List<? extends DataModel> dataModelList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        NavigationView navigationView = findViewById(R.id.nav_view);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();
        navigationView.setNavigationItemSelectedListener(this);
        ((App) getApplication()).getComponent().injectMain(this);

        ButterKnife.bind(this);

        mRecyclerView.setHasFixedSize(true);
        mLayoutManager = new LinearLayoutManager(this);
        mRecyclerView.setLayoutManager(mLayoutManager);

    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.nav_access_management) {
            presenter.loadAccessMagementComponents();
        } else if (id == R.id.nav_users) {
            presenter.loadUsers();
        } else if (id == R.id.nav_actions) {

        } else if (id == R.id.nav_rooms) {

        } else if (id == R.id.nav_about) {

        } else if (id == R.id.nav_settings) {

        } else if (id == R.id.nav_logout) {
            presenter.logoutButtonClicked();
        }

        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    @Override
    public Context getContext() {
        return getApplicationContext();
    }

    @Override
    public void onResume() {
        super.onResume();
        presenter.setView(this);
    }

    @Override
    public void goToLoginView() {
        Intent intent = new Intent(getBaseContext(), LoginActivity.class);
        startActivity(intent);
    }

    @Override
    public void updateAccessManagementList(List<AccessMangementDataModel> accessMangementDataModels) {
        this.dataModelList = accessMangementDataModels;
        mAdapter = new AccessMangementSystemAdapter(dataModelList, this);
        mRecyclerView.setAdapter(mAdapter);
    }

    @Override
    public void updateUserList(List<UserDataModel> users) {
        this.dataModelList = users;
        mAdapter = new UserAdapter(dataModelList, this);
        mRecyclerView.setAdapter(mAdapter);
    }
}
