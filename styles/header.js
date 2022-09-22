export default {
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 15,
    maxWidth: 480,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 0,
    paddingTop: 50,
    background: "#90937e30",
    position: "relative",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },

  headerLogoLink: {
    display: "flex",
    alignItems: "center",
  },

  headerLogoImg: {
    maxWidth: 40,
    maxHeight: 40,
    marginRight: 5,
  },

  headerLogoTitle: {
    color: "#4a3a2b",
    fontSize: 30,
    marginLeft: 5,
  },

  headerLogoTitleSpan: {
    color: "#375215",
    fontWeight: "bold",
  },

  rightDoor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: "0%",
    width: "100%",
    height: "100%",
    background: "white",
    zIndex: 6,
  },

  rightDoorRed: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: 0,
    background: "red",
    width: 30,
    height: 140,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 0,
  },

  rightDoorRedText: {
    transform: [{ rotate: -90 }],
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    width: 80,
    textAlign: "center",
  },

  rightDoorClose: {
    position: "absolute",
    top: 40,
    left: 10,
    width: 100,
    height: 40,
  },

  rightDoorCloseText: {
    fontSize: 18,
    color: "white",
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  rightDoorList: {
    marginTop: 50,
  },

  rightDoorListButton: {
    marginBottom: 50,
  },

  rightDoorListButtonText: {
    fontSize: 30,
  },
};
