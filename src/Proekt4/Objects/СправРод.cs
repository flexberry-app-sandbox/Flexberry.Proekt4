﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Справ род.
    /// </summary>
    // *** Start programmer edit section *** (СправРод CustomAttributes)

    // *** End programmer edit section *** (СправРод CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник Родители")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СправРодE", new string[] {
            "ФИОРод as \'Ф и о род\'"})]
    [View("СправРодL", new string[] {
            "ФИОРод as \'Ф и о род\'"})]
    public class СправРод : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИОРод;
        
        // *** Start programmer edit section *** (СправРод CustomMembers)

        // *** End programmer edit section *** (СправРод CustomMembers)

        
        /// <summary>
        /// ФИОРод.
        /// </summary>
        // *** Start programmer edit section *** (СправРод.ФИОРод CustomAttributes)

        // *** End programmer edit section *** (СправРод.ФИОРод CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОРод
        {
            get
            {
                // *** Start programmer edit section *** (СправРод.ФИОРод Get start)

                // *** End programmer edit section *** (СправРод.ФИОРод Get start)
                string result = this.fФИОРод;
                // *** Start programmer edit section *** (СправРод.ФИОРод Get end)

                // *** End programmer edit section *** (СправРод.ФИОРод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправРод.ФИОРод Set start)

                // *** End programmer edit section *** (СправРод.ФИОРод Set start)
                this.fФИОРод = value;
                // *** Start programmer edit section *** (СправРод.ФИОРод Set end)

                // *** End programmer edit section *** (СправРод.ФИОРод Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СправРодE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправРодE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправРодE", typeof(IIS.Proekt4.СправРод));
                }
            }
            
            /// <summary>
            /// "СправРодL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправРодL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправРодL", typeof(IIS.Proekt4.СправРод));
                }
            }
        }
    }
}
