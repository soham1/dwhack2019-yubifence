# Yubifence

Multi-party authentication with geofencing.

Winner of Developer Week 2019 Hackathon.

## What exactly does it provide?

* Multi-Party Authentication
    * It is a control mechanism designed to achieve a high level of security for especially critical material or operations.
    * Under this system, all access and actions require the authorization of all the parties involved.

* Geofencing
    * Intended to define virtual barriers on real geographical locations. 
    * Together with the location of the user, you can determine whether that object is located within, outside, or close to a predefined geographical area.
    * A user can spoof digital identity, steal the physical key, but cannot change his geolocation.

* Possible Use Cases
    * Use multi-party authentication for joint bank account operations.
    * Use TomTom Geofencing API to verify user is within a geofence before it can do fund transfers.

W3C WebAuthn: Registration Flow

<img src="https://i.imgur.com/ogWOJPm.png" style="max-width: 700px">

W3C WebAuthn: Authentication Flow

<img src="https://i.imgur.com/HQ38Dae.png" style="max-width: 700px">

## Built With

* Node.js
* Yubico API + Yubikey
* Tomtom's Search, Geofencing, and Fuzzy Search APIs
* Socket.io

## Screenshots

### Sample Bank.
<img src="https://i.imgur.com/MKHxyro.png" style="max-width: 700px"/>

### Joint registration of users. Geofences are being setup here.
<img src="https://i.imgur.com/7MgQG98.png" style="max-width: 700px"/>

### Registering Yubikeys of users.
<img src="https://i.imgur.com/NHmZcwr.png" style="max-width: 700px"/>

### Recent Transaction list.
<img src="https://i.imgur.com/UFuFqT1.png" style="max-width: 700px"/>

### Transferring funds using Virtual Authentication.
<img src="https://i.imgur.com/cUhvjgt.png" style="max-width: 700px"/>

### Approval denied as the user is not within the geofence.
<img src="https://i.imgur.com/4EKHvbX.png" style="max-width: 700px"/>

### Possible reasons of denied transactions.
<img src="https://i.imgur.com/TkZn81d.png" style="max-width: 700px"/>

### User can accept or reject a transfer request.
<img src="https://i.imgur.com/ptj7P2M.png" style="max-width: 700px"/>


