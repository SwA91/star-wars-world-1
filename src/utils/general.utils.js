class GeneralUtils {
  /**
   * Comprueba si el objeto es distinto de NULL y UNDEFINED
   * @param {*} object  a comprobar
   */
  static isWorkableObject(object) {
    return object !== null && object !== undefined;
  }
  /**
   * Comprueba si el objeto es distinto de NULL, UNDEFINED y STRING VACIO
   * @param {*} object a comprobar
   * @returns
   */
  static isFieldWithValue(object) {
    return this.isWorkableObject(object) && object !== "";
  }
}
export { GeneralUtils };
