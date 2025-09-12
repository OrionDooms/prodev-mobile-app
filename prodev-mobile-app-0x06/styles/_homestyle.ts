import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  searchGroup: {
    marginBottom: 16,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    overflow: "hidden",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
    padding: 12,
  },
  searchControl: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 12,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  listingContainer: {
    flex: 1,
  },
  paginationContainer: {
    alignItems: "center",
    padding: 16,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    padding: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
  },
});