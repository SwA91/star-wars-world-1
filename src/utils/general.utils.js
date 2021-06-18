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
  /**
   * Comprueba si el objeto es distinto a NULL, UNDEFINED y su longitud mayor a 0
   * @param {*} object a validar
   * @returns
   */
  static isArrayWithValue(object) {
    return this.isWorkableObject(object) && object.length > 0;
  }
}
export { GeneralUtils };
