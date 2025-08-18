import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
  const [notifictions, setNotifictions] = useState({
    push: true,
    email: false,
    sms: false,
  });
  return (
    <SettingSection icon={Bell} title={"Notifictions"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notifictions.push}
        onToggle={() =>
          setNotifictions({ ...notifictions, push: !notifictions.push })
        }
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notifictions.email}
        onToggle={() =>
          setNotifictions({ ...notifictions, email: !notifictions.email })
        }
      />
      <ToggleSwitch
        label={"Sms Notifications"}
        isOn={notifictions.sms}
        onToggle={() =>
          setNotifictions({ ...notifictions, sms: !notifictions.sms })
        }
      />
    </SettingSection>
  );
};

export default Notifications;
