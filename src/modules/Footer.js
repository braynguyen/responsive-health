import React from "react";
import './footer.css';

const Camden = {
    location: "Camden DE",
    street: "379 Walmart Dr STE A",
    city: "Camden, DE 19934",
    phone: "302-387-4343"
}

const Lewes = {
    location: "Lewes DE",
    street: "1309 Savannah Rd",
    city: "Lewes, DE 19958",
    phone: "302-644-1441"
}

const Millsboro = {
    location: "Millsboro DE",
    street: "25935 Plaza Drive",
    city: "Millsboro, DE 19966",
    phone: "302-947-4111"
}

const NewCastle = {
    location: "New Castle DE",
    street: "234 New Castle Ave",
    city: "New Castle, DE 19720",
    phone: "302-261-6343"
}

export default function Footer() {
    return (
        <div className="Footer">
            <p className="title">Our Locations</p>
            <div className="boxes">
                <div className="location">
                    <p className="location-name">{Camden.location}</p>
                    <p>{Camden.street}</p>
                    <p>{Camden.city}</p>
                    <p>{Camden.phone}</p>
                </div>
                <div className="location">
                    <p className="location-name">{Lewes.location}</p>
                    <p>{Lewes.street}</p>
                    <p>{Lewes.city}</p>
                    <p>{Lewes.phone}</p>
                </div>
                <div className="location">
                    <p className="location-name">{Millsboro.location}</p>
                    <p>{Millsboro.street}</p>
                    <p>{Millsboro.city}</p>
                    <p>{Millsboro.phone}</p>
                </div>
                <div className="location">
                    <p className="location-name">{NewCastle.location}</p>
                    <p>{NewCastle.street}</p>
                    <p>{NewCastle.city}</p>
                    <p>{NewCastle.phone}</p>
                </div>
            </div>
            <div className="phone-number">
                <p>Give us a call at 302-992-8050 - For emergencies, call 911</p>
                <p>Connect with us on Facebook</p>
                <p>©2022 Responsive Medicine</p>
            </div>
        </div>
    );
}