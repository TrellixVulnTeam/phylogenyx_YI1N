

    const width = 7560;
    const height = 7560;

    const svg = d3
        .select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    let g = svg
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 20) + ")");

    const cluster = d3.cluster().size([360, width / 2 - 120]);

    const json = "{" +
        "  \"children\": [" +
        "    {" +
        "      \"name\": \"Inner202\"," +
        "      \"children\": [" +
        "        {" +
        "          \"name\": \"Inner130\"," +
        "          \"children\": [" +
        "            {" +
        "              \"name\": \"sp|Q7V1H4|DNAK1_PROMP_Chaperone_protein_dnaK1_OS_Prochlorococcus_marinus_subsp._pastoris_strain_CCMP1986_/_NIES-2087_/_MED4_OX_59919_GN_dnaK1_PE_3_SV_1\"," +
        "              \"length\": 0.1014" +
        "            }," +
        "            {" +
        "              \"name\": \"Inner108\"," +
        "              \"children\": [" +
        "                {" +
        "                  \"name\": \"sp|Q7V7N7|DNAK1_PROMM_Chaperone_protein_dnaK1_OS_Prochlorococcus_marinus_strain_MIT_9313_OX_74547_GN_dnaK1_PE_3_SV_1\"," +
        "                  \"length\": 0.09104" +
        "                }," +
        "                {" +
        "                  \"name\": \"sp|Q7VC04|DNAK1_PROMA_Chaperone_protein_dnaK1_OS_Prochlorococcus_marinus_strain_SARG_/_CCMP1375_/_SS120_OX_167539_GN_dnaK1_PE_3_SV_1\"," +
        "                  \"length\": 0.09104" +
        "                }" +
        "              ]," +
        "              \"length\": 0.01036" +
        "            }" +
        "          ]," +
        "          \"length\": 0.08932" +
        "        }," +
        "        {" +
        "          \"name\": \"Inner199\"," +
        "          \"children\": [" +
        "            {" +
        "              \"name\": \"sp|P73098|DNAK3_SYNY3_Chaperone_protein_dnaK3_OS_Synechocystis_sp._strain_PCC_6803_/_Kazusa_OX_1111708_GN_dnaK3_PE_3_SV_2\"," +
        "              \"length\": 0.16703" +
        "            }," +
        "            {" +
        "              \"name\": \"Inner196\"," +
        "              \"children\": [" +
        "                {" +
        "                  \"name\": \"sp|Q5N1V0|DNAK1_SYNP6_Chaperone_protein_DnaK_1_OS_Synechococcus_sp._strain_ATCC_27144_/_PCC_6301_/_SAUG_1402/1_OX_269084_GN_dnaK1_PE_3_SV_1\"," +
        "                  \"length\": 0.1592" +
        "                }," +
        "                {" +
        "                  \"name\": \"Inner178\"," +
        "                  \"children\": [" +
        "                    {" +
        "                      \"name\": \"sp|Q8DH10|DNAK3_THEEB_Chaperone_protein_dnaK3_OS_Thermosynechococcus_elongatus_strain_BP-1_OX_197221_GN_dnaK3_PE_3_SV_1\"," +
        "                      \"length\": 0.1315" +
        "                    }," +
        "                    {" +
        "                      \"name\": \"sp|Q9ZEJ6|DNAK1_NOSS1_Chaperone_protein_dnaK1_OS_Nostoc_sp._strain_PCC_7120_/_SAG_25.82_/_UTEX_2576_OX_103690_GN_dnaK1_PE_3_SV_2\"," +
        "                      \"length\": 0.1315" +
        "                    }" +
        "                  ]," +
        "                  \"length\": 0.0277" +
        "                }" +
        "              ]," +
        "              \"length\": 0.00783" +
        "            }" +
        "          ]," +
        "          \"length\": 0.02369" +
        "        }" +
        "      ]," +
        "      \"length\": 0.04833" +
        "    }," +
        "    {" +
        "      \"name\": \"Inner203\"," +
        "      \"children\": [" +
        "        {" +
        "          \"name\": \"Inner200\"," +
        "          \"children\": [" +
        "            {" +
        "              \"name\": \"sp|O52960|DNAK_APHHA_Chaperone_protein_DnaK_OS_Aphanothece_halophytica_OX_72020_GN_dnaK_PE_2_SV_1\"," +
        "              \"length\": 0.16914" +
        "            }," +
        "            {" +
        "              \"name\": \"Inner191\"," +
        "              \"children\": [" +
        "                {" +
        "                  \"name\": \"sp|Q55154|DNAK1_SYNY3_Chaperone_protein_dnaK1_OS_Synechocystis_sp._strain_PCC_6803_/_Kazusa_OX_1111708_GN_dnaK1_PE_3_SV_1\"," +
        "                  \"length\": 0.14583" +
        "                }," +
        "                {" +
        "                  \"name\": \"Inner179\"," +
        "                  \"children\": [" +
        "                    {" +
        "                      \"name\": \"Inner154\"," +
        "                      \"children\": [" +
        "                        {" +
        "                          \"name\": \"sp|Q8YUA6|DNAK3_NOSS1_Chaperone_protein_dnaK3_OS_Nostoc_sp._strain_PCC_7120_/_SAG_25.82_/_UTEX_2576_OX_103690_GN_dnaK3_PE_3_SV_1\"," +
        "                          \"length\": 0.11368" +
        "                        }," +
        "                        {" +
        "                          \"name\": \"sp|Q8DKR6|DNAK1_THEEB_Chaperone_protein_dnaK1_OS_Thermosynechococcus_elongatus_strain_BP-1_OX_197221_GN_dnaK1_PE_3_SV_1\"," +
        "                          \"length\": 0.11368" +
        "                        }" +
        "                      ]," +
        "                      \"length\": 0.0183" +
        "                    }," +
        "                    {" +
        "                      \"name\": \"sp|P50020|DNAK1_SYNE7_Chaperone_protein_dnaK1_OS_Synechococcus_elongatus_strain_PCC_7942_OX_1140_GN_dnaK1_PE_3_SV_2\"," +
        "                      \"length\": 0.13198" +
        "                    }" +
        "                  ]," +
        "                  \"length\": 0.01385" +
        "                }" +
        "              ]," +
        "              \"length\": 0.0233" +
        "            }" +
        "          ]," +
        "          \"length\": 0.02962" +
        "        }," +
        "        {" +
        "          \"name\": \"Inner201\"," +
        "          \"children\": [" +
        "            {" +
        "              \"name\": \"Inner79\"," +
        "              \"children\": [" +
        "                {" +
        "                  \"name\": \"sp|A9A135|DNAK_NITMS_Chaperone_protein_DnaK_OS_Nitrosopumilus_maritimus_strain_SCM1_OX_436308_GN_dnaK_PE_3_SV_1\"," +
        "                  \"length\": 0.08237" +
        "                }," +
        "                {" +
        "                  \"name\": \"sp|A0RZ01|DNAK_CENSY_Chaperone_protein_DnaK_OS_Cenarchaeum_symbiosum_strain_A_OX_414004_GN_dnaK_PE_3_SV_1\"," +
        "                  \"length\": 0.08237" +
        "                }" +
        "              ]," +
        "              \"length\": 0.09365" +
        "            }," +
        "            {" +
        "              \"name\": \"Inner198\"," +
        "              \"children\": [" +
        "                {" +
        "                  \"name\": \"Inner197\"," +
        "                  \"children\": [" +
        "                    {" +
        "                      \"name\": \"Inner176\"," +
        "                      \"children\": [" +
        "                        {" +
        "                          \"name\": \"Inner24\"," +
        "                          \"children\": [" +
        "                            {" +
        "                              \"name\": \"sp|P47547|DNAK_MYCGE_Chaperone_protein_DnaK_OS_Mycoplasma_genitalium_strain_ATCC_33530_/_G-37_/_NCTC_10195_OX_243273_GN_dnaK_PE_1_SV_1\"," +
        "                              \"length\": 0.06792" +
        "                            }," +
        "                            {" +
        "                              \"name\": \"sp|Q7NAU6|DNAK_MYCGA_Chaperone_protein_DnaK_OS_Mycoplasma_gallisepticum_strain_Rlow_/_passage_15_/_clone_2_OX_710127_GN_dnaK_PE_3_SV_2\"," +
        "                              \"length\": 0.06792" +
        "                            }" +
        "                          ]," +
        "                          \"length\": 0.06263" +
        "                        }," +
        "                        {" +
        "                          \"name\": \"Inner174\"," +
        "                          \"children\": [" +
        "                            {" +
        "                              \"name\": \"Inner170\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"sp|B1AIX8|DNAK_UREP2_Chaperone_protein_DnaK_OS_Ureaplasma_parvum_serovar_3_strain_ATCC_27815_/_27_/_NCTC_11736_OX_505682_GN_dnaK_PE_3_SV_1\"," +
        "                                  \"length\": 0.12428" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"sp|Q8EUH7|DNAK_MYCPE_Chaperone_protein_DnaK_OS_Mycoplasma_penetrans_strain_HF-2_OX_272633_GN_dnaK_PE_3_SV_1\"," +
        "                                  \"length\": 0.12428" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.0032" +
        "                            }," +
        "                            {" +
        "                              \"name\": \"Inner168\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"Inner146\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"sp|Q9ZEJ0|DNAK_MYCHO_Chaperone_protein_DnaK_OS_Mycoplasma_hominis_OX_2098_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.10892" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner139\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner88\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|Q6KIH7|DNAK_MYCMO_Chaperone_protein_DnaK_OS_Mycoplasma_mobile_strain_ATCC_43663_/_163K_/_NCTC_11711_OX_267748_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.08526" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner66\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|Q4A658|DNAK_MYCS5_Chaperone_protein_DnaK_OS_Mycoplasma_synoviae_strain_53_OX_262723_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.07803" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner11\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q98QY7|DNAK_MYCPU_Chaperone_protein_DnaK_OS_Mycoplasma_pulmonis_strain_UAB_CTIP_OX_272635_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.06503" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q49539|DNAK_MYCH2_Chaperone_protein_DnaK_OS_Mycoplasma_hyopneumoniae_strain_232_OX_295358_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.06503" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.01301" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00723" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01957" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"sp|A5IXT5|DNAK_MYCAP_Chaperone_protein_DnaK_OS_Mycoplasma_agalactiae_strain_PG2_OX_347257_GN_dnaK_PE_3_SV_1\"," +
        "                                          \"length\": 0.10483" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.00409" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.0139" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"Inner51\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"sp|Q2SSB0|DNAK_MYCCT_Chaperone_protein_DnaK_OS_Mycoplasma_capricolum_subsp._capricolum_strain_California_kid_/_ATCC_27343_/_NCTC_10154_OX_340047_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.0737" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"sp|Q6F149|DNAK_MESFL_Chaperone_protein_DnaK_OS_Mesoplasma_florum_strain_ATCC_33453_/_NBRC_100688_/_NCTC_11704_/_L1_OX_265311_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.0737" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.04913" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.01855" +
        "                            }" +
        "                          ]," +
        "                          \"length\": 0.00627" +
        "                        }" +
        "                      ]," +
        "                      \"length\": 0.03672" +
        "                    }," +
        "                    {" +
        "                      \"name\": \"Inner194\"," +
        "                      \"children\": [" +
        "                        {" +
        "                          \"name\": \"Inner67\"," +
        "                          \"children\": [" +
        "                            {" +
        "                              \"name\": \"sp|B0R3H4|DNAK_HALS3_Chaperone_protein_DnaK_OS_Halobacterium_salinarum_strain_ATCC_29341_/_DSM_671_/_R1_OX_478009_GN_dnaK_PE_3_SV_1\"," +
        "                              \"length\": 0.07828" +
        "                            }," +
        "                            {" +
        "                              \"name\": \"Inner14\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"sp|Q9HHB9|DNAK_HALMT_Chaperone_protein_DnaK_OS_Haloferax_mediterranei_strain_ATCC_33500_/_DSM_1411_/_JCM_8866_/_NBRC_14739_/_NCIMB_2177_/_R-4_OX_523841_GN_dnaK_PE_3_SV_1\"," +
        "                                  \"length\": 0.06551" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"sp|B9LUC7|DNAK_HALLT_Chaperone_protein_DnaK_OS_Halorubrum_lacusprofundi_strain_ATCC_49239_/_DSM_5036_/_JCM_8891_/_ACAM_34_OX_416348_GN_dnaK_PE_3_SV_1\"," +
        "                                  \"length\": 0.06551" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.01276" +
        "                            }" +
        "                          ]," +
        "                          \"length\": 0.07264" +
        "                        }," +
        "                        {" +
        "                          \"name\": \"Inner188\"," +
        "                          \"children\": [" +
        "                            {" +
        "                              \"name\": \"Inner183\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"Inner160\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"Inner25\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"sp|P50023|DNAK_THEAC_Chaperone_protein_DnaK_OS_Thermoplasma_acidophilum_strain_ATCC_25905_/_DSM_1728_/_JCM_9062_/_NBRC_15155_/_AMRC-C165_OX_273075_GN_dnaK_PE_3_SV_2\"," +
        "                                          \"length\": 0.0684" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"sp|Q6L0S7|DNAK_PICTO_Chaperone_protein_DnaK_OS_Picrophilus_torridus_strain_ATCC_700027_/_DSM_9790_/_JCM_10055_/_NBRC_100828_OX_263820_GN_dnaK_PE_3_SV_1\"," +
        "                                          \"length\": 0.0684" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.0485" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner155\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner141\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"Inner121\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|A0B747|DNAK_METTP_Chaperone_protein_DnaK_OS_Methanothrix_thermoacetophila_strain_DSM_6194_/_JCM_14653_/_NBRC_101360_/_PT_OX_349307_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.09634" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|O27351|DNAK_METTH_Chaperone_protein_DnaK_OS_Methanothermobacter_thermautotrophicus_strain_ATCC_29096_/_DSM_1053_/_JCM_10044_/_NBRC_100330_/_Delta_H_OX_187420_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.09634" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00915" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"sp|Q0W874|DNAK_METAR_Chaperone_protein_DnaK_OS_Methanocella_arvoryzae_strain_DSM_22066_/_NBRC_105507_/_MRE50_OX_351160_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.10549" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.00897" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner115\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|B1H009|DNAK_UNCTG_Chaperone_protein_DnaK_OS_Uncultured_termite_group_1_bacterium_phylotype_Rs-D17_OX_471821_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.09441" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"sp|B2KAX0|DNAK_ELUMP_Chaperone_protein_DnaK_OS_Elusimicrobium_minutum_strain_Pei191_OX_445932_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.09441" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.02005" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.01141" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.03021" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"Inner167\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"sp|B7ID00|DNAK_THEAB_Chaperone_protein_DnaK_OS_Thermosipho_africanus_strain_TCF52B_OX_484019_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.12235" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"sp|B5YAR3|DNAK_DICT6_Chaperone_protein_DnaK_OS_Dictyoglomus_thermophilum_strain_ATCC_35947_/_DSM_3960_/_H-6-12_OX_309799_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.12235" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.01335" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.01985" +
        "                            }," +
        "                            {" +
        "                              \"name\": \"Inner184\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"Inner181\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"sp|C4Z1J4|DNAK_EUBE2_Chaperone_protein_DnaK_OS_Eubacterium_eligens_strain_ATCC_27750_/_VPI_C15-48_OX_515620_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.13289" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner172\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner166\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|Q6YPM1|DNAK_ONYPE_Chaperone_protein_DnaK_OS_Onion_yellows_phytoplasma_strain_OY-M_OX_262768_GN_dnaK_PE_3_SV_2\"," +
        "                                              \"length\": 0.12027" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner151\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"Inner111\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"Inner69\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q04EE1|DNAK_OENOB_Chaperone_protein_DnaK_OS_Oenococcus_oeni_strain_ATCC_BAA-331_/_PSU-1_OX_203123_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.07852" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|B1MZG6|DNAK_LEUCK_Chaperone_protein_DnaK_OS_Leuconostoc_citreum_strain_KM20_OX_349519_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.07852" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.01394" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner75\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|O87777|DNAK_LACSK_Chaperone_protein_DnaK_OS_Lactobacillus_sakei_OX_1599_GN_dnaK_PE_2_SV_1\"," +
        "                                                          \"length\": 0.08092" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"Inner44\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|Q03QU1|DNAK_LACBA_Chaperone_protein_DnaK_OS_Lactobacillus_brevis_strain_ATCC_367_/_JCM_1170_OX_387344_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.07177" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner3\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|B3WEQ7|DNAK_LACCB_Chaperone_protein_DnaK_OS_Lactobacillus_casei_strain_BL23_OX_543734_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.06166" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"sp|Q84BU4|DNAK_LACAC_Chaperone_protein_DnaK_OS_Lactobacillus_acidophilus_strain_ATCC_700396_/_NCK56_/_N2_/_NCFM_OX_272621_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.06166" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.01012" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00915" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.01153" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.02911" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|Q05647|DNAK_ERYRH_Chaperone_protein_DnaK_OS_Erysipelothrix_rhusiopathiae_OX_1648_GN_dnaK_PE_3_SV_2\"," +
        "                                                  \"length\": 0.11004" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.01024" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.00601" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner163\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"Inner36\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|Q12WE6|DNAK_METBU_Chaperone_protein_DnaK_OS_Methanococcoides_burtonii_strain_DSM_6242_/_NBRC_107633_/_OCM_468_/_ACE-M_OX_259564_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.07033" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|Q8TQR2|DNAK_METAC_Chaperone_protein_DnaK_OS_Methanosarcina_acetivorans_strain_ATCC_35395_/_DSM_2834_/_JCM_12185_/_C2A_OX_188937_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.07033" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.04841" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner156\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|Q8RH05|DNAK_FUSNN_Chaperone_protein_DnaK_OS_Fusobacterium_nucleatum_subsp._nucleatum_strain_ATCC_25586_/_CIP_101130_/_JCM_8532_/_LMG_13131_OX_190304_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.1151" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner149\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|B0S1F8|DNAK_FINM2_Chaperone_protein_DnaK_OS_Finegoldia_magna_strain_ATCC_29328_OX_334413_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.10957" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner140\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"Inner48\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|A6LRN4|DNAK_CLOB8_Chaperone_protein_DnaK_OS_Clostridium_beijerinckii_strain_ATCC_51743_/_NCIMB_8052_OX_290402_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.07262" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner12\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|A7FXL5|DNAK_CLOB1_Chaperone_protein_DnaK_OS_Clostridium_botulinum_strain_ATCC_19397_/_Type_A_OX_441770_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.06503" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"Inner4\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|A0Q1R4|DNAK_CLONN_Chaperone_protein_DnaK_OS_Clostridium_novyi_strain_NT_OX_386415_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.06166" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|P30721|DNAK_CLOAB_Chaperone_protein_DnaK_OS_Clostridium_acetobutylicum_strain_ATCC_824_/_DSM_792_/_JCM_1419_/_LMG_5710_/_VKM_B-1787_OX_272562_GN_dnaK_PE_2_SV_3\"," +
        "                                                                      \"length\": 0.06166" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00337" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.00759" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.03236" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"Inner132\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"Inner76\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|C0ZB48|DNAK_BREBN_Chaperone_protein_DnaK_OS_Brevibacillus_brevis_strain_47_/_JCM_6285_/_NBRC_100599_OX_358681_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.08159" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"Inner55\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|B1YKS9|DNAK_EXIS2_Chaperone_protein_DnaK_OS_Exiguobacterium_sibiricum_strain_DSM_17290_/_JCM_13490_/_255-15_OX_262543_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.07496" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner38\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner26\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|A7X2Y1|DNAK_STAA1_Chaperone_protein_DnaK_OS_Staphylococcus_aureus_strain_Mu3_/_ATCC_700698_OX_418127_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.0684" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner2\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|B1HUD1|DNAK_LYSSC_Chaperone_protein_DnaK_OS_Lysinibacillus_sphaericus_strain_C3-41_OX_444177_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.06118" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|Q835R7|DNAK_ENTFA_Chaperone_protein_DnaK_OS_Enterococcus_faecalis_strain_ATCC_700802_/_V583_OX_226185_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.06118" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.00723" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.00232" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner16\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|Q8EPW4|DNAK_OCEIH_Chaperone_protein_DnaK_OS_Oceanobacillus_iheyensis_strain_DSM_14371_/_CIP_107618_/_JCM_11309_/_KCTC_3954_/_HTE831_OX_221109_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.06575" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner1\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|Q9KD72|DNAK_BACHD_Chaperone_protein_DnaK_OS_Bacillus_halodurans_strain_ATCC_BAA-125_/_DSM_18197_/_FERM_7344_/_JCM_9153_/_C-125_OX_272558_GN_dnaK_PE_3_SV_3\"," +
        "                                                                                  \"length\": 0.05973" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|B7GKC8|DNAK_ANOFW_Chaperone_protein_DnaK_OS_Anoxybacillus_flavithermus_strain_DSM_21510_/_WK1_OX_491915_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.05973" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.00602" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.00497" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.00656" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00662" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.02033" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner128\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"Inner109\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|Q67S54|DNAK_SYMTH_Chaperone_protein_DnaK_OS_Symbiobacterium_thermophilum_strain_T_/_IAM_14863_OX_292459_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.09229" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner100\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner84\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|B1I699|DNAK_DESAP_Chaperone_protein_DnaK_OS_Desulforudis_audaxviator_strain_MP104C_OX_477974_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.08357" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner74\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|B0TAD7|DNAK_HELMI_Chaperone_protein_DnaK_OS_Heliobacterium_modesticaldum_strain_ATCC_51547_/_Ice1_OX_498761_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.08056" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"Inner61\"," +
        "                                                                                  \"children\": [" +
        "                                                                                    {" +
        "                                                                                      \"name\": \"sp|A4J7F3|DNAK_DESRM_Chaperone_protein_DnaK_OS_Desulfotomaculum_reducens_strain_MI-1_OX_349161_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                      \"length\": 0.07635" +
        "                                                                                    }," +
        "                                                                                    {" +
        "                                                                                      \"name\": \"Inner27\"," +
        "                                                                                      \"children\": [" +
        "                                                                                        {" +
        "                                                                                          \"name\": \"sp|Q2RKX4|DNAK_MOOTA_Chaperone_protein_DnaK_OS_Moorella_thermoacetica_strain_ATCC_39073_/_JCM_9320_OX_264732_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                          \"length\": 0.0684" +
        "                                                                                        }," +
        "                                                                                        {" +
        "                                                                                          \"name\": \"sp|Q3AF08|DNAK_CARHZ_Chaperone_protein_DnaK_OS_Carboxydothermus_hydrogenoformans_strain_ATCC_BAA-161_/_DSM_6008_/_Z-2901_OX_246194_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                          \"length\": 0.0684" +
        "                                                                                        }" +
        "                                                                                      ]," +
        "                                                                                      \"length\": 0.00795" +
        "                                                                                    }" +
        "                                                                                  ]," +
        "                                                                                  \"length\": 0.00421" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.00301" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.00605" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner82\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner13\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|B8I305|DNAK_RUMCH_Chaperone_protein_DnaK_OS_Ruminiclostridium_cellulolyticum_strain_ATCC_35319_/_DSM_5812_/_JCM_6584_/_H10_OX_394503_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.06551" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|A3DF25|DNAK_HUNT2_Chaperone_protein_DnaK_OS_Hungateiclostridium_thermocellum_strain_ATCC_27405_/_DSM_1237_/_JCM_9322_/_NBRC_103400_/_NCIMB_10682_/_NRRL_B-4536_/_VPI_7372_OX_203119_GN_dnaK_PE_3_S1\"," +
        "                                                                                  \"length\": 0.06551" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.01746" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner40\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|Q8RB68|DNAK_CALS4_Chaperone_protein_DnaK_OS_Caldanaerobacter_subterraneus_subsp._tengcongensis_strain_DSM_15242_/_JCM_11007_/_NBRC_100824_/_MB4_OX_273068_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.07081" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|B9MJZ1|DNAK_CALBD_Chaperone_protein_DnaK_OS_Caldicellulosiruptor_bescii_strain_ATCC_BAA-1888_/_DSM_6725_/_Z-1320_OX_521460_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.07081" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.01216" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.01882" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.00872" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00734" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"Inner125\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|B8FUN4|DNAK_DESHD_Chaperone_protein_DnaK_OS_Desulfitobacterium_hafniense_strain_DCB-2_/_DSM_10664_OX_272564_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.09766" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner120\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner104\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|B8CXL1|DNAK_HALOH_Chaperone_protein_DnaK_OS_Halothermothrix_orenii_strain_H_168_/_OCM_544_/_DSM_9562_OX_373903_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.09056" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|Q182E8|DNAK_CLOD6_Chaperone_protein_DnaK_OS_Clostridioides_difficile_strain_630_OX_272563_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.09056" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.00554" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"sp|A6TSM0|DNAK_ALKMQ_Chaperone_protein_DnaK_OS_Alkaliphilus_metalliredigens_strain_QYMF_OX_293826_GN_dnaK_PE_3_SV_1\"," +
        "                                                                          \"length\": 0.0961" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.00157" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00197" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.00425" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00731" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.01191" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00553" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00364" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01118" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.01262" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.00335" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"Inner136\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"Inner94\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"sp|P64410|DNAK_TROW8_Chaperone_protein_DnaK_OS_Tropheryma_whipplei_strain_TW08/27_OX_218496_GN_dnaK_PE_3_SV_1\"," +
        "                                          \"length\": 0.08707" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner77\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|B8DT62|DNAK_BIFA0_Chaperone_protein_DnaK_OS_Bifidobacterium_animalis_subsp._lactis_strain_AD011_OX_442563_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.08165" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner53\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"Inner37\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|A6WFV7|DNAK_KINRD_Chaperone_protein_DnaK_OS_Kineococcus_radiotolerans_strain_ATCC_BAA-149_/_DSM_14245_/_SRS30216_OX_266940_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07033" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|C5C3P2|DNAK_BEUC1_Chaperone_protein_DnaK_OS_Beutenbergia_cavernae_strain_ATCC_BAA-8_/_DSM_12333_/_NBRC_16432_OX_471853_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07033" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00373" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner6\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|A5CM86|DNAK_CLAM3_Chaperone_protein_DnaK_OS_Clavibacter_michiganensis_subsp._michiganensis_strain_NCPPB_382_OX_443906_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.0631" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|A0K1L3|DNAK_ARTS2_Chaperone_protein_DnaK_OS_Arthrobacter_sp._strain_FB24_OX_290399_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.0631" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.01096" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.01132" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.00542" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.01625" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner114\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner107\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|A8LWM4|DNAK_SALAI_Chaperone_protein_DnaK_OS_Salinispora_arenicola_strain_CNS-205_OX_391037_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.09104" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner39\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|A0QLZ6|DNAK_MYCA1_Chaperone_protein_DnaK_OS_Mycobacterium_avium_strain_104_OX_243243_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.07081" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|C3PJM6|DNAK_CORA7_Chaperone_protein_DnaK_OS_Corynebacterium_aurimucosum_strain_ATCC_700975_/_DSM_44827_/_CN-1_OX_548476_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.07081" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.02023" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.00332" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner92\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|P0CY98|DNAK_CUTAC_Chaperone_protein_DnaK_OS_Cutibacterium_acnes_OX_1747_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.08625" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner81\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|A1SPX5|DNAK_NOCSJ_Chaperone_protein_DnaK_OS_Nocardioides_sp._strain_ATCC_BAA-499_/_JS614_OX_196162_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.08297" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner46\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"Inner30\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q47TI0|DNAK_THEFY_Chaperone_protein_DnaK_OS_Thermobifida_fusca_strain_YX_OX_269800_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.06912" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"Inner18\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|Q0RBC4|DNAK_FRAAA_Chaperone_protein_DnaK_OS_Frankia_alni_strain_ACN14a_OX_326424_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.06647" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"sp|A0LWS7|DNAK_ACIC1_Chaperone_protein_DnaK_OS_Acidothermus_cellulolyticus_strain_ATCC_43068_/_11B_OX_351607_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.06647" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00265" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.00301" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q82EX9|DNAK1_STRAW_Chaperone_protein_dnaK1_OS_Streptomyces_avermitilis_strain_ATCC_31267_/_DSM_46492_/_JCM_5070_/_NBRC_14893_/_NCIMB_12804_/_NRRL_8165_/_MA-4680_OX_227882_GN_dnaK1_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07213" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.01084" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00328" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.0081" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.01228" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.0452" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.00931" +
        "                            }" +
        "                          ]," +
        "                          \"length\": 0.01803" +
        "                        }" +
        "                      ]," +
        "                      \"length\": 0.02811" +
        "                    }" +
        "                  ]," +
        "                  \"length\": 0.03212" +
        "                }," +
        "                {" +
        "                  \"name\": \"Inner195\"," +
        "                  \"children\": [" +
        "                    {" +
        "                      \"name\": \"Inner192\"," +
        "                      \"children\": [" +
        "                        {" +
        "                          \"name\": \"sp|O67118|DNAK_AQUAE_Chaperone_protein_DnaK_OS_Aquifex_aeolicus_strain_VF5_OX_224324_GN_dnaK_PE_3_SV_1\"," +
        "                          \"length\": 0.14732" +
        "                        }," +
        "                        {" +
        "                          \"name\": \"Inner185\"," +
        "                          \"children\": [" +
        "                            {" +
        "                              \"name\": \"Inner152\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"sp|Q72IK5|DNAK_THET2_Chaperone_protein_DnaK_OS_Thermus_thermophilus_strain_HB27_/_ATCC_BAA-163_/_DSM_7039_OX_262724_GN_dnaK_PE_3_SV_1\"," +
        "                                  \"length\": 0.11175" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"sp|C1CZH9|DNAK_DEIDV_Chaperone_protein_DnaK_OS_Deinococcus_deserti_strain_VCD115_/_DSM_17065_/_LMG_22923_OX_546414_GN_dnaK_PE_3_SV_1\"," +
        "                                  \"length\": 0.11175" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.02474" +
        "                            }," +
        "                            {" +
        "                              \"name\": \"Inner180\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"sp|Q826F6|DNAK2_STRAW_Chaperone_protein_dnaK2_OS_Streptomyces_avermitilis_strain_ATCC_31267_/_DSM_46492_/_JCM_5070_/_NBRC_14893_/_NCIMB_12804_/_NRRL_8165_/_MA-4680_OX_227882_GN_dnaK2_PE_3_SV_1\"," +
        "                                  \"length\": 0.13249" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"Inner162\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"Inner78\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"sp|A0T0X1|DNAK_THAPS_Chaperone_protein_dnaK_OS_Thalassiosira_pseudonana_OX_35128_GN_dnaK_PE_3_SV_1\"," +
        "                                          \"length\": 0.08189" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"sp|A0T0H7|DNAK_PHATC_Chaperone_protein_dnaK_OS_Phaeodactylum_tricornutum_strain_CCAP_1055/1_OX_556484_GN_dnaK_PE_3_SV_1\"," +
        "                                          \"length\": 0.08189" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.03565" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner123\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner113\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"Inner86\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"Inner85\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"Inner57\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|P29215|DNAK_GUITH_Chaperone_protein_dnaK_OS_Guillardia_theta_OX_55529_GN_dnaK_PE_3_SV_2\"," +
        "                                                          \"length\": 0.07563" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"Inner31\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|P69376|DNAK_PORPU_Chaperone_protein_dnaK_OS_Porphyra_purpurea_OX_2787_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.06936" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"sp|Q6B8V2|DNAK_GRATL_Chaperone_protein_dnaK_OS_Gracilaria_tenuistipitata_var._liui_OX_285951_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.06936" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00626" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.00819" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q4G366|DNAK_EMIHU_Chaperone_protein_dnaK_OS_Emiliania_huxleyi_OX_2903_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.08382" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00102" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|P30722|DNAK_DIALT_Chaperone_protein_dnaK_OS_Diacronema_lutheri_OX_2832_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.08484" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00915" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner102\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|Q37106|DNAK_CYAPA_Chaperone_protein_dnaK_OS_Cyanophora_paradoxa_OX_2762_GN_dnaK-A_PE_3_SV_2\"," +
        "                                                  \"length\": 0.08984" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner64\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q85FW4|DNAK_CYAM1_Chaperone_protein_dnaK_OS_Cyanidioschyzon_merolae_strain_10D_OX_280699_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07707" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q9TLT1|DNAK_CYACA_Chaperone_protein_dnaK_OS_Cyanidium_caldarium_OX_2771_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07707" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.01276" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00415" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.00707" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner89\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|Q7V9G2|DNAK2_PROMA_Chaperone_protein_dnaK2_OS_Prochlorococcus_marinus_strain_SARG_/_CCMP1375_/_SS120_OX_167539_GN_dnaK2_PE_3_SV_1\"," +
        "                                              \"length\": 0.0855" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner70\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|Q7NDH1|DNAK_GLOVI_Chaperone_protein_DnaK_OS_Gloeobacter_violaceus_strain_ATCC_29082_/_PCC_7421_OX_251221_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.079" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|Q8YW74|DNAK2_NOSS1_Chaperone_protein_dnaK2_OS_Nostoc_sp._strain_PCC_7120_/_SAG_25.82_/_UTEX_2576_OX_103690_GN_dnaK2_PE_3_SV_1\"," +
        "                                                  \"length\": 0.079" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.0065" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01141" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.0277" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.04266" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.004" +
        "                            }" +
        "                          ]," +
        "                          \"length\": 0.01483" +
        "                        }" +
        "                      ]," +
        "                      \"length\": 0.00521" +
        "                    }," +
        "                    {" +
        "                      \"name\": \"Inner193\"," +
        "                      \"children\": [" +
        "                        {" +
        "                          \"name\": \"sp|Q7UM31|DNAK_RHOBA_Chaperone_protein_DnaK_OS_Rhodopirellula_baltica_strain_DSM_10527_/_NCIMB_13988_/_SH1_OX_243090_GN_dnaK_PE_3_SV_2\"," +
        "                          \"length\": 0.1489" +
        "                        }," +
        "                        {" +
        "                          \"name\": \"Inner190\"," +
        "                          \"children\": [" +
        "                            {" +
        "                              \"name\": \"Inner189\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"Inner175\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"sp|Q2S307|DNAK_SALRD_Chaperone_protein_DnaK_OS_Salinibacter_ruber_strain_DSM_13855_/_M31_OX_309807_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.12929" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner159\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner144\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|Q9XCB1|DNAK_RHOMR_Chaperone_protein_DnaK_OS_Rhodothermus_marinus_OX_29549_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.10633" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner59\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|B3QZ38|DNAK_CHLT3_Chaperone_protein_DnaK_OS_Chloroherpeton_thalassium_strain_ATCC_35110_/_GB-78_OX_517418_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.07611" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner34\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|B3EKT9|DNAK_CHLPB_Chaperone_protein_DnaK_OS_Chlorobium_phaeobacteroides_strain_BS1_OX_331678_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.06985" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q3APD2|DNAK_CHLCH_Chaperone_protein_DnaK_OS_Chlorobium_chlorochromatii_strain_CaD3_OX_340177_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.06985" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00626" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.03023" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01043" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner137\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"Inner99\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"Inner54\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q93GF1|DNAK_PRELO_Chaperone_protein_DnaK_OS_Prevotella_loescheii_OX_840_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07418" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner23\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|A6LDG8|DNAK_PARD8_Chaperone_protein_DnaK_OS_Parabacteroides_distasonis_strain_ATCC_8503_/_DSM_20701_/_CIP_104284_/_JCM_5825_/_NCTC_11152_OX_435591_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.06792" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q5LG30|DNAK_BACFN_Chaperone_protein_DnaK_OS_Bacteroides_fragilis_strain_ATCC_25285_/_DSM_2151_/_JCM_11019_/_NCTC_9343_OX_272559_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.06792" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.00626" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.01541" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|B6YRF7|DNAK_AZOPC_Chaperone_protein_DnaK_OS_Azobacteroides_pseudotrichonymphae_genomovar._CFP2_OX_511995_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.0896" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.01456" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner129\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|A8Z5V5|DNAK_SULMW_Chaperone_protein_DnaK_OS_Sulcia_muelleri_strain_GWSS_OX_444179_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.10019" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner105\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"Inner15\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|A0M353|DNAK_GRAFK_Chaperone_protein_DnaK_OS_Gramella_forsetii_strain_KT0803_OX_411154_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.06551" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|A5FGL1|DNAK_FLAJ1_Chaperone_protein_DnaK_OS_Flavobacterium_johnsoniae_strain_ATCC_17061_/_DSM_2064_/_UW101_OX_376686_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.06551" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.02505" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner80\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q11QH3|DNAK_CYTH3_Chaperone_protein_DnaK_OS_Cytophaga_hutchinsonii_strain_ATCC_33406_/_NCIMB_9469_OX_269798_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.08285" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|B3ERN8|DNAK_AMOA5_Chaperone_protein_DnaK_OS_Amoebophilus_asiaticus_strain_5a2_OX_452471_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.08285" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.00771" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.01734" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00396" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01657" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.02296" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.01529" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"Inner186\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"Inner124\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"sp|Q6MB26|DNAK_PARUW_Chaperone_protein_DnaK_OS_Protochlamydia_amoebophila_strain_UWE25_OX_264201_GN_dnaK_PE_3_SV_1\"," +
        "                                          \"length\": 0.0973" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"sp|Q8GH79|DNAK_CHLAB_Chaperone_protein_DnaK_OS_Chlamydia_abortus_strain_DSM_27085_/_S26/3_OX_218497_GN_dnaK_PE_3_SV_2\"," +
        "                                          \"length\": 0.0973" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.04212" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner177\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner147\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|B3DZP7|DNAK_METI4_Chaperone_protein_DnaK_OS_Methylacidiphilum_infernorum_isolate_V4_OX_481448_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.10934" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"sp|B2UKV6|DNAK_AKKM8_Chaperone_protein_DnaK_OS_Akkermansia_muciniphila_strain_ATCC_BAA-835_/_Muc_OX_349741_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.10934" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.02201" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner171\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"Inner161\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"Inner153\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|B0SHT1|DNAK_LEPBA_Chaperone_protein_DnaK_OS_Leptospira_biflexa_serovar_Patoc_strain_Patoc_1_/_Ames_OX_355278_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.11344" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner133\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q73Q16|DNAK_TREDE_Chaperone_protein_DnaK_OS_Treponema_denticola_strain_ATCC_35405_/_CIP_103919_/_DSM_14222_OX_243275_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.10212" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q0SMZ0|DNAK_BORAP_Chaperone_protein_DnaK_OS_Borrelia_afzelii_strain_PKo_OX_390236_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.10212" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.01132" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00349" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"sp|Q6MNF8|DNAK_BDEBA_Chaperone_protein_DnaK_OS_Bdellovibrio_bacteriovorus_strain_ATCC_15356_/_DSM_50701_/_NCIB_9529_/_HD100_OX_264462_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.11693" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00926" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner165\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|Q1AXX6|DNAK_RUBXD_Chaperone_protein_DnaK_OS_Rubrobacter_xylanophilus_strain_DSM_9941_/_NBRC_16129_OX_266117_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.12012" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner158\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"Inner150\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"Inner135\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|B5YH59|DNAK_THEYD_Chaperone_protein_DnaK_OS_Thermodesulfovibrio_yellowstonii_strain_ATCC_51303_/_DSM_11347_/_YP87_OX_289376_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.1026" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"sp|P96133|DNAK_THERP_Chaperone_protein_DnaK_OS_Thermomicrobium_roseum_strain_ATCC_27502_/_DSM_5159_/_P-2_OX_309801_GN_dnaK_PE_3_SV_2\"," +
        "                                                              \"length\": 0.1026" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00723" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q3Z6P1|DNAK_DEHM1_Chaperone_protein_DnaK_OS_Dehalococcoides_mccartyi_strain_ATCC_BAA-2266_/_KCTC_15142_/_195_OX_243164_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.10983" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.00656" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner98\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q01PM8|DNAK_SOLUE_Chaperone_protein_DnaK_OS_Solibacter_usitatus_strain_Ellin6076_OX_234267_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.0896" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|C1F2D2|DNAK_ACIC5_Chaperone_protein_DnaK_OS_Acidobacterium_capsulatum_strain_ATCC_51196_/_DSM_11244_/_JCM_7670_/_NBRC_15755_/_NCIMB_13165_/_161_OX_240015_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.0896" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.02679" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.0103" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00607" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01123" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.0193" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.02446" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.01648" +
        "                            }," +
        "                            {" +
        "                              \"name\": \"Inner187\"," +
        "                              \"children\": [" +
        "                                {" +
        "                                  \"name\": \"Inner127\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"sp|B9L8Z0|DNAK_NAUPA_Chaperone_protein_DnaK_OS_Nautilia_profundicola_strain_ATCC_BAA-1463_/_DSM_18972_/_AmH_OX_598659_GN_dnaK_PE_3_SV_1\"," +
        "                                      \"length\": 0.0983" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner96\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"Inner47\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|Q17VY4|DNAK_HELAH_Chaperone_protein_DnaK_OS_Helicobacter_acinonychis_strain_Sheeba_OX_382638_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.07237" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner29\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|A6QBG0|DNAK_SULNB_Chaperone_protein_DnaK_OS_Sulfurovum_sp._strain_NBC37-1_OX_387093_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.06912" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner9\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|A6Q421|DNAK_NITSB_Chaperone_protein_DnaK_OS_Nitratiruptor_sp._strain_SB155-2_OX_387092_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.06407" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|A7ZEB5|DNAK_CAMC1_Chaperone_protein_DnaK_OS_Campylobacter_concisus_strain_13826_OX_360104_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.06407" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00506" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00325" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01502" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner63\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|Q30Q10|DNAK_SULDN_Chaperone_protein_DnaK_OS_Sulfurimonas_denitrificans_strain_ATCC_33889_/_DSM_1251_OX_326298_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.07707" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"sp|A8EWT6|DNAK_ARCB4_Chaperone_protein_DnaK_OS_Arcobacter_butzleri_strain_RM4018_OX_367737_GN_dnaK_PE_3_SV_1\"," +
        "                                              \"length\": 0.07707" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.01033" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.02122" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.04298" +
        "                                }," +
        "                                {" +
        "                                  \"name\": \"Inner182\"," +
        "                                  \"children\": [" +
        "                                    {" +
        "                                      \"name\": \"Inner173\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"sp|P95334|DNAK_MYXXD_Chaperone_protein_DnaK_OS_Myxococcus_xanthus_strain_DK_1622_OX_246197_GN_dnaK_PE_3_SV_2\"," +
        "                                          \"length\": 0.12682" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner164\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"Inner143\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"sp|O85282|DNAK_NEOSE_Chaperone_protein_DnaK_OS_Neorickettsia_sennetsu_OX_951_GN_dnaK_PE_3_SV_1\"," +
        "                                                  \"length\": 0.10621" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner119\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q73GL7|DNAK_WOLPM_Chaperone_protein_DnaK_OS_Wolbachia_pipientis_wMel_OX_163164_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.09586" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner73\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q3YRR6|DNAK_EHRCJ_Chaperone_protein_DnaK_OS_Ehrlichia_canis_strain_Jake_OX_269484_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.07996" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q5PAB8|DNAK_ANAMM_Chaperone_protein_DnaK_OS_Anaplasma_marginale_strain_St._Maries_OX_234826_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.07996" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.0159" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.01036" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.01277" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner148\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"Inner134\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"Inner95\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"Inner72\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|Q2LUH6|DNAK_SYNAS_Chaperone_protein_DnaK_OS_Syntrophus_aciditrophicus_strain_SB_OX_56780_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.07948" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner21\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|Q3A8C2|DNAK_PELCD_Chaperone_protein_DnaK_OS_Pelobacter_carbinolicus_strain_DSM_2380_/_NBRC_103641_/_GraBd1_OX_338963_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.06696" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"sp|B5EC42|DNAK_GEOBB_Chaperone_protein_DnaK_OS_Geobacter_bemidjiensis_strain_Bem_/_ATCC_BAA-1014_/_DSM_16622_OX_404380_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.06696" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.01252" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00789" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"Inner83\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|Q6AMQ3|DNAK_DESPS_Chaperone_protein_DnaK_OS_Desulfotalea_psychrophila_strain_LSv54_/_DSM_12343_OX_177439_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.08333" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner45\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"Inner33\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|A8ZRW3|DNAK_DESOH_Chaperone_protein_DnaK_OS_Desulfococcus_oleovorans_strain_DSM_6200_/_Hxd3_OX_96561_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.06985" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|B8FGS3|DNAK_DESAL_Chaperone_protein_DnaK_OS_Desulfatibacillum_aliphaticivorans_OX_218208_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.06985" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00217" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"sp|C0QGP6|DNAK_DESAH_Chaperone_protein_DnaK_OS_Desulfobacterium_autotrophicum_strain_ATCC_43914_/_DSM_3382_/_HRM2_OX_177437_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.07201" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.01132" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00403" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.01898" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner52\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q1MPW1|DNAK_LAWIP_Chaperone_protein_DnaK_OS_Lawsonia_intracellularis_strain_PHE/MN1-00_OX_363253_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.0737" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"sp|C6BSF2|DNAK_DESAD_Chaperone_protein_DnaK_OS_Desulfovibrio_salexigens_strain_ATCC_14822_/_DSM_2638_/_NCIB_8403_/_VKM_B-1763_OX_526222_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.0737" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.02862" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.02612" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner138\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|A0L4Z2|DNAK_MAGMM_Chaperone_protein_DnaK_OS_Magnetococcus_marinus_strain_ATCC_BAA-1437_/_JCM_17883_/_MC-1_OX_156889_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.1043" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner126\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"sp|Q4FNP9|DNAK_PELUB_Chaperone_protein_DnaK_OS_Pelagibacter_ubique_strain_HTCC1062_OX_335992_GN_dnaK_PE_3_SV_1\"," +
        "                                                          \"length\": 0.09779" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"Inner118\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"sp|C3PMM7|DNAK_RICAE_Chaperone_protein_DnaK_OS_Rickettsia_africae_strain_ESF-5_OX_347255_GN_dnaK_PE_3_SV_1\"," +
        "                                                              \"length\": 0.09515" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner116\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|Q28VY3|DNAK_JANSC_Chaperone_protein_DnaK_OS_Jannaschia_sp._strain_CCS1_OX_290400_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.09465" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"Inner106\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|Q2G6N0|DNAK_NOVAD_Chaperone_protein_DnaK_OS_Novosphingobium_aromaticivorans_strain_ATCC_700278_/_DSM_12444_/_CIP_105152_/_NBRC_16084_/_F199_OX_279238_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.09077" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner93\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"sp|Q0BWZ9|DNAK_HYPNA_Chaperone_protein_DnaK_OS_Hyphomonas_neptunium_strain_ATCC_15444_OX_228405_GN_dnaK_PE_3_SV_1\"," +
        "                                                                          \"length\": 0.08665" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner90\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|B0T138|DNAK_CAUSK_Chaperone_protein_DnaK_OS_Caulobacter_sp._strain_K31_OX_366602_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.08583" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner71\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"Inner56\"," +
        "                                                                                  \"children\": [" +
        "                                                                                    {" +
        "                                                                                      \"name\": \"sp|A7HZ39|DNAK_PARL1_Chaperone_protein_DnaK_OS_Parvibaculum_lavamentivorans_strain_DS-1_/_DSM_13023_/_NCIMB_13966_OX_402881_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                      \"length\": 0.07545" +
        "                                                                                    }," +
        "                                                                                    {" +
        "                                                                                      \"name\": \"Inner50\"," +
        "                                                                                      \"children\": [" +
        "                                                                                        {" +
        "                                                                                          \"name\": \"sp|Q0AKB1|DNAK_MARMM_Chaperone_protein_DnaK_OS_Maricaulis_maris_strain_MCS10_OX_394221_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                          \"length\": 0.07298" +
        "                                                                                        }," +
        "                                                                                        {" +
        "                                                                                          \"name\": \"Inner42\"," +
        "                                                                                          \"children\": [" +
        "                                                                                            {" +
        "                                                                                              \"name\": \"sp|Q2VYT1|DNAK_MAGSA_Chaperone_protein_DnaK_OS_Magnetospirillum_magneticum_strain_AMB-1_/_ATCC_700264_OX_342108_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                              \"length\": 0.07129" +
        "                                                                                            }," +
        "                                                                                            {" +
        "                                                                                              \"name\": \"Inner28\"," +
        "                                                                                              \"children\": [" +
        "                                                                                                {" +
        "                                                                                                  \"name\": \"sp|B2IBR4|DNAK_BEII9_Chaperone_protein_DnaK_OS_Beijerinckia_indica_subsp._indica_strain_ATCC_9039_/_DSM_1715_/_NCIB_8712_OX_395963_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                                  \"length\": 0.0684" +
        "                                                                                                }," +
        "                                                                                                {" +
        "                                                                                                  \"name\": \"sp|P50019|DNAK_AGRFC_Chaperone_protein_DnaK_OS_Agrobacterium_fabrum_strain_C58_/_ATCC_33970_OX_176299_GN_dnaK_PE_2_SV_2\"," +
        "                                                                                                  \"length\": 0.0684" +
        "                                                                                                }" +
        "                                                                                              ]," +
        "                                                                                              \"length\": 0.00289" +
        "                                                                                            }" +
        "                                                                                          ]," +
        "                                                                                          \"length\": 0.00169" +
        "                                                                                        }" +
        "                                                                                      ]," +
        "                                                                                      \"length\": 0.00247" +
        "                                                                                    }" +
        "                                                                                  ]," +
        "                                                                                  \"length\": 0.00391" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|A5FZ19|DNAK_ACICJ_Chaperone_protein_DnaK_OS_Acidiphilium_cryptum_strain_JF-5_OX_349163_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.07936" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.00647" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.00082" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.00412" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00388" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.00049" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00265" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.0065" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00515" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.01468" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.02061" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.0077" +
        "                                    }," +
        "                                    {" +
        "                                      \"name\": \"Inner169\"," +
        "                                      \"children\": [" +
        "                                        {" +
        "                                          \"name\": \"sp|Q05FS8|DNAK_CARRP_Chaperone_protein_DnaK_OS_Carsonella_ruddii_strain_PV_OX_387662_GN_dnaK_PE_3_SV_1\"," +
        "                                          \"length\": 0.1229" +
        "                                        }," +
        "                                        {" +
        "                                          \"name\": \"Inner157\"," +
        "                                          \"children\": [" +
        "                                            {" +
        "                                              \"name\": \"sp|Q486F9|DNAK1_COLP3_Chaperone_protein_DnaK_1_OS_Colwellia_psychrerythraea_strain_34H_/_ATCC_BAA-681_OX_167879_GN_dnaK1_PE_3_SV_1\"," +
        "                                              \"length\": 0.11579" +
        "                                            }," +
        "                                            {" +
        "                                              \"name\": \"Inner145\"," +
        "                                              \"children\": [" +
        "                                                {" +
        "                                                  \"name\": \"Inner58\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q4FPS9|DNAK_PSYA2_Chaperone_protein_DnaK_OS_Psychrobacter_arcticus_strain_DSM_17307_/_273-4_OX_259536_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07563" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"sp|Q6F6N3|DNAK_ACIAD_Chaperone_protein_DnaK_OS_Acinetobacter_baylyi_strain_ATCC_33305_/_BD413_/_ADP1_OX_62977_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.07563" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.03266" +
        "                                                }," +
        "                                                {" +
        "                                                  \"name\": \"Inner142\"," +
        "                                                  \"children\": [" +
        "                                                    {" +
        "                                                      \"name\": \"sp|B7J7X9|DNAK_ACIF2_Chaperone_protein_DnaK_OS_Acidithiobacillus_ferrooxidans_strain_ATCC_23270_/_DSM_14882_/_CIP_104768_/_NCIMB_8455_OX_243159_GN_dnaK_PE_3_SV_1\"," +
        "                                                      \"length\": 0.1059" +
        "                                                    }," +
        "                                                    {" +
        "                                                      \"name\": \"Inner131\"," +
        "                                                      \"children\": [" +
        "                                                        {" +
        "                                                          \"name\": \"Inner122\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"Inner112\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|A1AW22|DNAK_RUTMC_Chaperone_protein_DnaK_OS_Ruthia_magnifica_subsp._Calyptogena_magnifica_OX_413404_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.09297" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"Inner97\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|B4SSQ6|DNAK_STRM5_Chaperone_protein_DnaK_OS_Stenotrophomonas_maltophilia_strain_R551-3_OX_391008_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.08767" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|A5EYG3|DNAK_DICNV_Chaperone_protein_DnaK_OS_Dichelobacter_nodosus_strain_VCS1703A_OX_246195_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.08767" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.0053" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.00351" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner117\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|A1WX31|DNAK_HALHL_Chaperone_protein_DnaK_OS_Halorhodospira_halophila_strain_DSM_244_/_SL1_OX_349124_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.09471" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"Inner110\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner103\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner91\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|Q31HA7|DNAK_HYDCU_Chaperone_protein_DnaK_OS_Hydrogenovibrio_crunogenus_strain_XCL-2_OX_317025_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.08622" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|B0TYF2|DNAK_FRAP2_Chaperone_protein_DnaK_OS_Francisella_philomiragia_subsp._philomiragia_strain_ATCC_25017_OX_484022_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.08622" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.00414" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner87\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner62\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"Inner35\"," +
        "                                                                                  \"children\": [" +
        "                                                                                    {" +
        "                                                                                      \"name\": \"sp|Q3J7D8|DNAK_NITOC_Chaperone_protein_DnaK_OS_Nitrosococcus_oceani_strain_ATCC_19707_/_BCRC_17464_/_NCIMB_11848_/_C-107_OX_323261_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                      \"length\": 0.07009" +
        "                                                                                    }," +
        "                                                                                    {" +
        "                                                                                      \"name\": \"Inner20\"," +
        "                                                                                      \"children\": [" +
        "                                                                                        {" +
        "                                                                                          \"name\": \"sp|B8GNX1|DNAK_THISH_Chaperone_protein_DnaK_OS_Thioalkalivibrio_sulfidiphilus_strain_HL-EbGR7_OX_396588_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                          \"length\": 0.06696" +
        "                                                                                        }," +
        "                                                                                        {" +
        "                                                                                          \"name\": \"sp|Q607A5|DNAK_METCA_Chaperone_protein_DnaK_OS_Methylococcus_capsulatus_strain_ATCC_33009_/_NCIMB_11132_/_Bath_OX_243233_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                          \"length\": 0.06696" +
        "                                                                                        }" +
        "                                                                                      ]," +
        "                                                                                      \"length\": 0.00313" +
        "                                                                                    }" +
        "                                                                                  ]," +
        "                                                                                  \"length\": 0.00656" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"Inner22\"," +
        "                                                                                  \"children\": [" +
        "                                                                                    {" +
        "                                                                                      \"name\": \"sp|Q5X3M7|DNAK_LEGPA_Chaperone_protein_DnaK_OS_Legionella_pneumophila_strain_Paris_OX_297246_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                      \"length\": 0.06744" +
        "                                                                                    }," +
        "                                                                                    {" +
        "                                                                                      \"name\": \"sp|B6J7U7|DNAK_COXB1_Chaperone_protein_DnaK_OS_Coxiella_burnetii_strain_CbuK_Q154_OX_434924_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                      \"length\": 0.06744" +
        "                                                                                    }" +
        "                                                                                  ]," +
        "                                                                                  \"length\": 0.00921" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.01479" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"Inner43\"," +
        "                                                                              \"children\": [" +
        "                                                                                {" +
        "                                                                                  \"name\": \"sp|Q48E62|DNAK_PSE14_Chaperone_protein_DnaK_OS_Pseudomonas_savastanoi_pv._phaseolicola_strain_1448A_/_Race_6_OX_264730_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                  \"length\": 0.07135" +
        "                                                                                }," +
        "                                                                                {" +
        "                                                                                  \"name\": \"Inner19\"," +
        "                                                                                  \"children\": [" +
        "                                                                                    {" +
        "                                                                                      \"name\": \"sp|B3PF33|DNAK_CELJU_Chaperone_protein_DnaK_OS_Cellvibrio_japonicus_strain_Ueda107_OX_498211_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                      \"length\": 0.06647" +
        "                                                                                    }," +
        "                                                                                    {" +
        "                                                                                      \"name\": \"Inner8\"," +
        "                                                                                      \"children\": [" +
        "                                                                                        {" +
        "                                                                                          \"name\": \"Inner5\"," +
        "                                                                                          \"children\": [" +
        "                                                                                            {" +
        "                                                                                              \"name\": \"sp|Q2SMM8|DNAK_HAHCH_Chaperone_protein_DnaK_OS_Hahella_chejuensis_strain_KCTC_2396_OX_349521_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                              \"length\": 0.06214" +
        "                                                                                            }," +
        "                                                                                            {" +
        "                                                                                              \"name\": \"sp|Q1QSX0|DNAK_CHRSD_Chaperone_protein_DnaK_OS_Chromohalobacter_salexigens_strain_DSM_3043_/_ATCC_BAA-138_/_NCIMB_13768_OX_290398_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                              \"length\": 0.06214" +
        "                                                                                            }" +
        "                                                                                          ]," +
        "                                                                                          \"length\": 0.00145" +
        "                                                                                        }," +
        "                                                                                        {" +
        "                                                                                          \"name\": \"sp|Q0VST6|DNAK_ALCBS_Chaperone_protein_DnaK_OS_Alcanivorax_borkumensis_strain_ATCC_700651_/_DSM_11573_/_NCIMB_13689_/_SK2_OX_393595_GN_dnaK_PE_3_SV_1\"," +
        "                                                                                          \"length\": 0.06358" +
        "                                                                                        }" +
        "                                                                                      ]," +
        "                                                                                      \"length\": 0.00289" +
        "                                                                                    }" +
        "                                                                                  ]," +
        "                                                                                  \"length\": 0.00488" +
        "                                                                                }" +
        "                                                                              ]," +
        "                                                                              \"length\": 0.01353" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.01901" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.00618" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner65\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner7\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|Q7NXI3|DNAK_CHRVO_Chaperone_protein_DnaK_OS_Chromobacterium_violaceum_strain_ATCC_12472_/_DSM_30191_/_JCM_1249_/_NBRC_12614_/_NCIMB_9131_/_NCTC_9757_OX_243365_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.06358" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|Q5P1H5|DNAK_AROAE_Chaperone_protein_DnaK_OS_Aromatoleum_aromaticum_strain_EbN1_OX_76114_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.06358" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.01445" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"Inner41\"," +
        "                                                                          \"children\": [" +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|A4SZR8|DNAK_POLAQ_Chaperone_protein_DnaK_OS_Polynucleobacter_asymbioticus_strain_DSM_18221_/_CIP_109841_/_QLW-P1DMWA-1_OX_312153_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.07129" +
        "                                                                            }," +
        "                                                                            {" +
        "                                                                              \"name\": \"sp|B9MDJ7|DNAK_ACIET_Chaperone_protein_DnaK_OS_Acidovorax_ebreus_strain_TPSY_OX_535289_GN_dnaK_PE_3_SV_1\"," +
        "                                                                              \"length\": 0.07129" +
        "                                                                            }" +
        "                                                                          ]," +
        "                                                                          \"length\": 0.00674" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.02111" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00849" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.00177" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.00673" +
        "                                                        }," +
        "                                                        {" +
        "                                                          \"name\": \"Inner101\"," +
        "                                                          \"children\": [" +
        "                                                            {" +
        "                                                              \"name\": \"Inner68\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"sp|Q8D2Q5|DNAK_WIGBR_Chaperone_protein_DnaK_OS_Wigglesworthia_glossinidia_brevipalpis_OX_36870_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.07852" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"sp|P59565|DNAK_BUCBP_Chaperone_protein_DnaK_OS_Buchnera_aphidicola_subsp._Baizongia_pistaciae_strain_Bp_OX_224915_GN_dnaK_PE_3_SV_1\"," +
        "                                                                  \"length\": 0.07852" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.01129" +
        "                                                            }," +
        "                                                            {" +
        "                                                              \"name\": \"Inner60\"," +
        "                                                              \"children\": [" +
        "                                                                {" +
        "                                                                  \"name\": \"Inner49\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|Q5QXL1|DNAK_IDILO_Chaperone_protein_DnaK_OS_Idiomarina_loihiensis_strain_ATCC_BAA-735_/_DSM_15497_/_L2-TR_OX_283942_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.07274" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner10\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"sp|A1STE4|DNAK_PSYIN_Chaperone_protein_DnaK_OS_Psychromonas_ingrahamii_strain_37_OX_357804_GN_dnaK_PE_3_SV_1\"," +
        "                                                                          \"length\": 0.06503" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"sp|Q47XI6|DNAK2_COLP3_Chaperone_protein_DnaK_2_OS_Colwellia_psychrerythraea_strain_34H_/_ATCC_BAA-681_OX_167879_GN_dnaK2_PE_3_SV_1\"," +
        "                                                                          \"length\": 0.06503" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.00771" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.0034" +
        "                                                                }," +
        "                                                                {" +
        "                                                                  \"name\": \"Inner32\"," +
        "                                                                  \"children\": [" +
        "                                                                    {" +
        "                                                                      \"name\": \"sp|A3N3K0|DNAK_ACTP2_Chaperone_protein_DnaK_OS_Actinobacillus_pleuropneumoniae_serotype_5b_strain_L20_OX_416269_GN_dnaK_PE_3_SV_1\"," +
        "                                                                      \"length\": 0.06936" +
        "                                                                    }," +
        "                                                                    {" +
        "                                                                      \"name\": \"Inner17\"," +
        "                                                                      \"children\": [" +
        "                                                                        {" +
        "                                                                          \"name\": \"sp|P0A6Y8|DNAK_ECOLI_Chaperone_protein_DnaK_OS_Escherichia_coli_strain_K12_OX_83333_GN_dnaK_PE_1_SV_2\"," +
        "                                                                          \"length\": 0.06599" +
        "                                                                        }," +
        "                                                                        {" +
        "                                                                          \"name\": \"sp|Q5E4T4|DNAK1_ALIF1_Chaperone_protein_DnaK_1_OS_Aliivibrio_fischeri_strain_ATCC_700601_/_ES114_OX_312309_GN_dnaK1_PE_3_SV_1\"," +
        "                                                                          \"length\": 0.06599" +
        "                                                                        }" +
        "                                                                      ]," +
        "                                                                      \"length\": 0.00337" +
        "                                                                    }" +
        "                                                                  ]," +
        "                                                                  \"length\": 0.00677" +
        "                                                                }" +
        "                                                              ]," +
        "                                                              \"length\": 0.01707" +
        "                                                            }" +
        "                                                          ]," +
        "                                                          \"length\": 0.02293" +
        "                                                        }" +
        "                                                      ]," +
        "                                                      \"length\": 0.01119" +
        "                                                    }" +
        "                                                  ]," +
        "                                                  \"length\": 0.00238" +
        "                                                }" +
        "                                              ]," +
        "                                              \"length\": 0.00989" +
        "                                            }" +
        "                                          ]," +
        "                                          \"length\": 0.00711" +
        "                                        }" +
        "                                      ]," +
        "                                      \"length\": 0.01162" +
        "                                    }" +
        "                                  ]," +
        "                                  \"length\": 0.01446" +
        "                                }" +
        "                              ]," +
        "                              \"length\": 0.01895" +
        "                            }" +
        "                          ]," +
        "                          \"length\": 0.01961" +
        "                        }" +
        "                      ]," +
        "                      \"length\": 0.00364" +
        "                    }" +
        "                  ]," +
        "                  \"length\": 0.01612" +
        "                }" +
        "              ]," +
        "              \"length\": 0.02712" +
        "            }" +
        "          ]," +
        "          \"length\": 0.04986" +
        "        }" +
        "      ]," +
        "      \"length\": 0.04622" +
        "    }" +
        "  ]," +
        "  \"name\": \"Inner204\"," +
        "  \"length\": 0" +
        "}"





        const root = d3
            .hierarchy(data)
            .eachBefore(d => {
                d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name;
            })
            .sort((a, b) => {
                return a.height - b.height || a.data.id.localeCompare(b.data.id);
            });

        cluster(root);

        const link = g
            .selectAll(".link")
            .data(root.descendants().slice(1))
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", d => {
                return (
                    "M" +
                    project(d.x, d.y) +
                    "C" +
                    project(d.x, (d.y + d.parent.y) / 2) +
                    " " +
                    project(d.parent.x, (d.y + d.parent.y) / 2) +
                    " " +
                    project(d.parent.x, d.parent.y)
                );
            });

        const node = g
            .selectAll(".node")
            .data(root.descendants())
            .enter()
            .append("g")
            .attr("class", d => {
                return "node" + (d.children ? " node--internal" : " node--leaf");
            })
            .attr("transform", d => "translate(" + project(d.x, d.y) + ")");

        node.append("circle").attr("r", 2.5);

        node
            .append("text")
            .attr("dy", "0.31em")
            .attr("x", d => (d.x < 180 === !d.children ? 6 : 36))
            .style("text-anchor", d => (d.x < 180 === !d.children ? "start" : "end"))
            .attr("transform", d => "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")")
            .text(d => d.data.id.substring(d.data.id.lastIndexOf(".") + 1));


    function project(x, y) {
        const angle = (x - 90) / 180 * Math.PI;
        const radius = y;
        return [radius * Math.cos(angle), radius * Math.sin(angle)];
    }
