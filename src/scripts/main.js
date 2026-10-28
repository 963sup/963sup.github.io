import "../styles/main.css";
import { getHomepageViewModel } from "../application/get-homepage-view-model.js";
import { getProfile } from "../infrastructure/profile/static-profile-repository.js";
import { mountApp } from "../presentation/app.js";

mountApp(getHomepageViewModel(getProfile()));
