var RTCEvents = {
    RTC_READY: "rtc.ready",
    DATA_CHANNEL_OPEN: "rtc.data_channel_open",
    LASTN_CHANGED: "rtc.lastn_changed",
    DOMINANTSPEAKER_CHANGED: "rtc.dominantspeaker_changed",
    LASTN_ENDPOINT_CHANGED: "rtc.lastn_endpoint_changed",
    AVAILABLE_DEVICES_CHANGED: "rtc.available_devices_changed",
    TRACK_ATTACHED: "rtc.track_attached",
    AUDIO_OUTPUT_DEVICE_CHANGED: "rtc.audio_output_device_changed",
    DEVICE_LIST_CHANGED: "rtc.device_list_changed",
    DEVICE_LIST_AVAILABLE: "rtc.device_list_available",
    /**
     * Indicates that a message from another participant is received on
     * data channel.
     */
    ENDPOINT_MESSAGE_RECEIVED:
        "rtc.endpoint_message_received"
};

module.exports = RTCEvents;
